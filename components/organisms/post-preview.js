import Link from 'next/link'
import CoverImage from "../molecules/cover-image";
import DateComponent from "../atoms/date";
import Avatar from "../molecules/avatar";
import CardContainer, {CardBodyContainer, CardFooterContainer} from "../atoms/card";
import CardImage from "@material-tailwind/react/CardImage";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
     <CardContainer>
         {/*<CardImage*/}
         {/*    src={coverImage.url}*/}
         {/*    alt="Card Image"*/}
         {/*/>*/}
         <CoverImage title={title} slug={slug} url={coverImage.url} />
         <CardBodyContainer slug={slug} title={title} date={date} excerpt={excerpt}/>
         <CardFooterContainer>
             {author && <Avatar name={author.name} picture={author.picture} />}
         </CardFooterContainer>
    </CardContainer>
  )
}
