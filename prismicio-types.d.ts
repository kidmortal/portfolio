// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = TechStackSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type PageDocumentDataSlicesSlice = TechStackSlice;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectsDocumentDataSlicesSlice = TechStackSlice;

/**
 * Content for projects documents
 */
interface ProjectsDocumentData {
  /**
   * titulos field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.titulos
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulos: prismic.KeyTextField;

  /**
   * Slice Zone field in *projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Description field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

export type AllDocumentTypes = HomeDocument | PageDocument | ProjectsDocument;

/**
 * Primary content in *Header → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * logo field in *Header → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Primary content in *Header → Items*
 */
export interface HeaderSliceDefaultItem {
  /**
   * link field in *Header → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * icon field in *Header → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * label field in *Header → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  Simplify<HeaderSliceDefaultItem>
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *TechStack → Primary*
 */
export interface TechStackSliceDefaultPrimary {
  /**
   * Title field in *TechStack → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_stack.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *TechStack → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_stack.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *TechStack → Items*
 */
export interface TechStackSliceDefaultItem {
  /**
   * icon field in *TechStack → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech_stack.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Default variation for TechStack Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechStackSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TechStackSliceDefaultPrimary>,
  Simplify<TechStackSliceDefaultItem>
>;

/**
 * Slice variation for *TechStack*
 */
type TechStackSliceVariation = TechStackSliceDefault;

/**
 * TechStack Shared Slice
 *
 * - **API ID**: `tech_stack`
 * - **Description**: TechStack
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechStackSlice = prismic.SharedSlice<
  "tech_stack",
  TechStackSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeaderSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceDefaultItem,
      HeaderSliceVariation,
      HeaderSliceDefault,
      TechStackSlice,
      TechStackSliceDefaultPrimary,
      TechStackSliceDefaultItem,
      TechStackSliceVariation,
      TechStackSliceDefault,
    };
  }
}
