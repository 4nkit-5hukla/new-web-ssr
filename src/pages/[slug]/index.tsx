import { FC } from 'react';
import type { InferGetStaticPropsType, GetServerSidePropsContext } from 'next';

import { populate, populateDeep } from 'root/constants/config';
import { apiRequest } from 'root/utils/apiRequest';

type DynamicPageProps = InferGetStaticPropsType<typeof getServerSideProps>;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    req: { headers },
    params,
  } = context;
  const userAgent = headers['user-agent'] || '';
  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
  const slug = params ? params.slug : undefined;

  try {
    const resHeader = await apiRequest(`/main-nav`, 'GET', populateDeep);
    const header = resHeader.data;
    const resFooter = await apiRequest(`/footer-top-menu`, 'GET', populateDeep);
    const footer = resFooter.data;
    const result = await apiRequest(`/pages`, 'GET', {
      params: {
        filters: { slug: { $eq: slug } },
        pagination: { pageSize: 1 },
        populate,
      },
    });
    const meta = result.meta;
    if (meta.pagination.total > 0) {
      const [pageData] = result.data;
      return {
        props: {
          isBot,
          header,
          footer,
          result: pageData,
        },
      };
    } else {
      return { notFound: true };
    }
  } catch (_) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }
};

const DynamicPage: FC<DynamicPageProps> = (data) => {
  return (
    <div style={{ fontFamily: 'var(--roboto)' }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DynamicPage;
