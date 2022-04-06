import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";
import Link from "next/link";
import DateComponent from "./date";
import Avatar from "../molecules/avatar";

export default function CardContainer({ children }) {
  return (
    <Card>
      {children}
    </Card>
  )
}
export function CardFooterContainer({ children }) {
  return (
      <CardFooter>
        { children }
      </CardFooter>
  )
}
export function CardBodyContainer({ title,slug,date,excerpt,author }) {
  return (
    <CardBody>

      <H6 color="gray">
        <Link href={`/posts/${slug}`}>
        <a className="hover:underline">{title}</a>
      </Link>
      </H6>
      <Paragraph color="gray">
        <div className="text-lg mb-4">
          <DateComponent dateString={date} />
        </div>
        {excerpt}
        {author && <Avatar name={author.name} picture={author.picture} />}
      </Paragraph>
    </CardBody>
  )
}
