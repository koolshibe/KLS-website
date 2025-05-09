import { storyfetch } from "./fetch";

export default async function Page({params}) {
  const {slug} = await params;

  const data = storyfetch(slug);

  return (
    <div>
      {data}
    </div>
  );
}