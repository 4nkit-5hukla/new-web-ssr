import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  method?: string;
  name: string;
  query: Partial<{ [key: string]: string | string[] }>;
  url?: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method, query, url } = req;
  res.status(200).json({ name: 'John Doe', method, query, url });
};

export default handler;
