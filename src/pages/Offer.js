import { useParams } from "react-router-dom";

export default function Offers() {
  console.log(useParams());
  const { id } = useParams();
  return <div>Hello {id}</div>;
}
