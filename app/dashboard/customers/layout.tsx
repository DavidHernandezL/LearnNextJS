import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customers',
  };

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {children}
    </>
  )
}
export default layout