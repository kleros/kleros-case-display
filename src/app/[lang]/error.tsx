"use server";

import { Logtail } from "@logtail/node";

export default async function Error({ error }: { error: Error }) {
  const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN);
  logtail.use(async (log: any) => ({ ...log, process: __filename }));
  logtail.error(error);
  logtail.flush();

  return <h2>Something went wrong!</h2>;
}
