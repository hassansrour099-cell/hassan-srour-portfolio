import { SkeletonOne } from "@/components/bento-one/skeletons/first";
import { Button } from "@/components/button";

export const DesignAndDevelopment = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
      <div className="w-full flex-1 h-85">
        <SkeletonOne />
      </div>
      <div className="mt-4 flex flex-col gap-6 px-4 py-4 z-10">
        <div className="relative">
          <h2 className="text-base font-medium text-white">
            Full-stack product work
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            End-to-end web apps: React and Next.js frontends, REST APIs,
            headless CMS, and Dockerized deployments on VPS or Vercel.
          </p>
        </div>
        <div>
          <Button
            showAvatar={false}
            containerClassName="my-4"
            text="Contact me"
          />
        </div>
      </div>
    </div>
  );
};

