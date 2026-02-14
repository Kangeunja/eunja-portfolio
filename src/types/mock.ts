export interface DesignMock {
  className: string;
  title?: string;
  purpose?: string;
  message?: string;
  point?: string;
  slug?: string;
}

export type MockItem = {
  slug: string;
  title: string;
  className: string;
  type: string;
  program: string;
  desc: string;
  detailClassName: string[];
  mocks: DesignMock[];
};
