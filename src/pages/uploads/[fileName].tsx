import { GetServerSideProps } from 'next';

// This tells Next.js to handle this as a server-side rendered page
export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  const fileName = params?.fileName;

  if (!fileName || typeof fileName !== 'string') {
    return {
      notFound: true
    };
  }

  try {
    const response = await fetch(`${process.env.SERVER_URL}/uploads/${fileName}`);

    if (!response.ok) {
      return {
        notFound: true
      };
    }

    const contentType = response.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }

    const contentDisposition = response.headers.get('content-disposition') || `inline; filename="${fileName}"`;
    res.setHeader('Content-Disposition', contentDisposition);

    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    
    // Write the response and end the request
    res.write(Buffer.from(buffer));
    res.end();

    // Return nothing as we've handled the response
    return {
      props: {},
    };
  } catch (error) {
    console.error('Error fetching file:', error);
    return {
      notFound: true
    };
  }
};

// This component will never be rendered as we handle everything in getServerSideProps
export default function FileHandler() {
  return null;
}