interface IHeaderProps {
  title: string;
}
export const Header = ({ title }: IHeaderProps) => {
  return (
    <h1 className="font-semibold tracking-tight mb-10 border-b pb-1 text-2xl contrast-more:border-neutral-400 dark:border-primary-100/10 contrast-more:dark:border-neutral-400">
      {title}
    </h1>
  );
};
