
import type { HTMLAttributes, ElementType } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
     as?: ElementType;
     spacing?: "default" | "compact" | "large";
};

const spacingClasses = {
     compact: "py-12 md:py-16",
     default: "py-16 md:py-24",
     large: "py-20 md:py-32",
};

export function Section({
     as: Tag = "section",
     spacing = "default",
     className,
     children,
     ...props
}: SectionProps) {
     return (
          <Tag
               className={[spacingClasses[spacing], className]
                    .filter(Boolean)
                    .join(" ")}
               {...props}
          >
               {children}
          </Tag>
     );
}
