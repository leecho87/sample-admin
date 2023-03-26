export type RouteType = {
  path: string;
  name: string;
  component: React.FunctionComponent<any>;
  guard?: React.FunctionComponent<any>;
};