import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

interface CallBlockProps {
  title: string;
  body: string;
}

/** The closing call to action: a yellow panel with the quote form link and the phone number. */
const CallBlock = ({ title, body }: CallBlockProps) => (
  <section className="container-site pb-20 md:pb-28">
    <div className="on-bus reveal grid gap-8 rounded-card bg-bus px-6 py-10 text-asphalt sm:px-10 md:py-14 lg:grid-cols-12 lg:items-end lg:px-14">
      <div className="lg:col-span-7">
        <h2 className="display-xl">{title}</h2>
        <p className="mt-4 max-w-xl text-[1.1875rem] leading-relaxed text-asphalt/85">{body}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
        <Button asChild size="lg" className="nudge bg-asphalt text-white hover:bg-asphalt/85">
          <Link to="/contact">
            Request a quote
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-asphalt text-asphalt hover:bg-asphalt/10"
        >
          <a href={PHONE_HREF}>
            <Phone aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default CallBlock;
