import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <div className="w-full max-w-[560px] aspect-[560/240]">
            <img src={src} alt={alt} className="rounded-xl object-cover w-full h-full" />
          </div>
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
