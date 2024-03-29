import hljs from 'highlight.js';
import 'highlight.js/styles/github.min.css';

export function Code({
  children,
  className,
  ...props
}: React.ComponentProps<'code'>) {
  return (
    <code
      {...props}
      dangerouslySetInnerHTML={{
        __html: hljs.highlightAuto(children as string).value,
      }}
    />
  );
}
