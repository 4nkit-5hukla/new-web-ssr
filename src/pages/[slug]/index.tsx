import { FC } from 'react';
import type { InferGetStaticPropsType, GetServerSidePropsContext } from 'next';

import { populate, populateDeep } from 'root/constants/config';
import { apiRequest } from 'root/utils/apiRequest';

import { FC } from 'react';
import type { InferGetStaticPropsType, GetServerSidePropsContext } from 'next';
import { apiRequest } from 'root/utils/apiRequest';
import { populate, populateDeep } from 'root/constants/config';
import { DynamicPageProps, ApiResponse, HeaderData, FooterData, PageData } from 'root/types/api';

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

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
    const resHeader: ApiResponse<HeaderData> = await apiRequest(`/main-nav`, 'GET', populateDeep);
    const header = resHeader.data;
    const resFooter: ApiResponse<FooterData> = await apiRequest(`/footer-top-menu`, 'GET', populateDeep);
    const footer = resFooter.data;
    const result: ApiResponse<PageData[]> = await apiRequest(`/pages`, 'GET', {
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

const DynamicPage: FC<Props> = (data) => {
  return (
    <div style={{ fontFamily: 'var(--roboto)' }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DynamicPage;
