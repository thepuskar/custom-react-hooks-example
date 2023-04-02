interface IParagraphProps {
  text: string | number
}

export const Paragraph = ({ text }: IParagraphProps) => {
  return <p className="my-3 text-gray-200 dark:text-gray-400">{text}</p>
}
