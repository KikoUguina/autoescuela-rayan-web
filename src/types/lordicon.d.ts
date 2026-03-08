import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          trigger?: string;
          target?: string;
          colors?: string;
          state?: string;
        },
        HTMLElement
      >;
    }
  }
}
