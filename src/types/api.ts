
// Base types for common data structures
export interface ApiResponse<T = any> {
  data: T;
  meta: ApiMeta;
}

export interface ApiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

// Navigation and menu structures
export interface NavigationItem {
  id: number;
  attributes: {
    title: string;
    url: string;
    target?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    children?: NavigationItem[];
  };
}

export interface HeaderData {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    items: {
      data: NavigationItem[];
    };
  };
}

export interface FooterData {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    items: {
      data: NavigationItem[];
    };
  };
}

// Media/Image types
export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface MediaFormats {
  large?: MediaFormat;
  small?: MediaFormat;
  medium?: MediaFormat;
  thumbnail?: MediaFormat;
}

export interface MediaData {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: MediaFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  };
}

// Component types for dynamic content
export interface ComponentBase {
  id: number;
  __component: string;
}

export interface TextComponent extends ComponentBase {
  __component: 'shared.text';
  content: string;
  align?: 'left' | 'center' | 'right';
}

export interface ImageComponent extends ComponentBase {
  __component: 'shared.image';
  image: {
    data: MediaData;
  };
  alt?: string;
  caption?: string;
}

export interface ButtonComponent extends ComponentBase {
  __component: 'shared.button';
  text: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'outline';
  target?: '_blank' | '_self';
}

export interface HeroComponent extends ComponentBase {
  __component: 'sections.hero';
  title: string;
  subtitle?: string;
  description?: string;
  image?: {
    data: MediaData;
  };
  buttons?: ButtonComponent[];
}

export interface FeatureComponent extends ComponentBase {
  __component: 'sections.features';
  title: string;
  description?: string;
  features: Array<{
    id: number;
    title: string;
    description: string;
    icon?: {
      data: MediaData;
    };
  }>;
}

// Union type for all possible components
export type DynamicComponent = 
  | TextComponent 
  | ImageComponent 
  | ButtonComponent 
  | HeroComponent 
  | FeatureComponent;

// SEO metadata
export interface SeoData {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
  metaImage?: {
    data: MediaData;
  };
  metaSocial?: Array<{
    id: number;
    socialNetwork: 'Facebook' | 'Twitter';
    title: string;
    description: string;
    image?: {
      data: MediaData;
    };
  }>;
}

// Page data structure
export interface PageData {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description?: string;
    content?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    seo?: SeoData;
    featuredImage?: {
      data: MediaData;
    };
    components?: DynamicComponent[];
    localizations?: {
      data: Array<{
        id: number;
        attributes: {
          title: string;
          slug: string;
          locale: string;
        };
      }>;
    };
  };
}

// Props types for pages
export interface BasePageProps {
  isBot: boolean;
  header: HeaderData;
  footer: FooterData;
}

export interface HomePageProps extends BasePageProps {
  result: PageData;
}

export interface DynamicPageProps extends BasePageProps {
  result: PageData;
}

// API request types
export interface ApiRequestFilters {
  [key: string]: any;
  slug?: {
    $eq?: string;
    $containsi?: string;
  };
  $or?: Array<{
    slug: {
      $containsi: string;
    };
  }>;
}

export interface ApiRequestParams {
  filters?: ApiRequestFilters;
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  populate?: string | object;
  sort?: string | string[];
  locale?: string;
}

export interface ApiRequestConfig {
  params?: ApiRequestParams;
}
