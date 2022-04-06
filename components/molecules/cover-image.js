import Link from 'next/link'
import cn from 'classnames'
import ContentfulImage from "../atoms/contentful-image";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'shadow-lg rounded-lg hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  )

  return (
    <div className="sm:mx-0 -mt-9">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
