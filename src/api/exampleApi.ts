import { axios } from "../utils/axios";
import ENDPOINTS from "./endpoints";

type ExampleApi = {
  id: string;
  name: string;
  numIssues: number;
  numEvents24h: number;
};

export async function getExample() {
  const { data } = await axios.get<ExampleApi[]>(ENDPOINTS.getProjects);
  return data;
}
