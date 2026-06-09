import { Link } from "react-router-dom";
import { PageMeta } from "@/components/PageMeta";
import { routes } from "@/lib/routes";

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you're looking for could not be found."
        path="/404/"
      />
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-pb-navy">Page Not Found</h1>
        <p className="mt-4 max-w-md text-pb-gray">
          Sorry, we couldn&apos;t find that page. Return home or contact us for
          HVAC service in Midvale and Salt Lake County.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={routes.home}
            className="rounded-lg bg-pb-orange px-6 py-3 font-semibold text-white transition hover:bg-pb-orange-dark"
          >
            Back to Home
          </Link>
          <Link
            to={routes.contactUs}
            className="rounded-lg border-2 border-pb-navy px-6 py-3 font-semibold text-pb-navy transition hover:bg-pb-gray-light"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
