
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({
     className,
     children,
     ...props
}: ContainerProps) {
     return (
          <div
               className={[
                    "mx-auto w-full max-w-[var(--container-width)] px-[var(--page-gutter)]",
                    className,
               ]
                    .filter(Boolean)
                    .join(" ")}
               {...props}
          >
               {children}
          </div>
     );
}

