
import { Container } from "@/components/layout/container";
import { footerData } from "@/data/footer";

export function Footer() {
     return (
          <footer className="border-t border-[var(--border)] py-6">
               <Container className="flex flex-col gap-3 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                         © 2026 {footerData.brand}
                    </p>

                    <p>{footerData.description}</p>

                    <p className="font-mono text-xs">{footerData.note}</p>
               </Container>
          </footer>
     );
}
