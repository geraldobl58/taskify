interface ClerkLayoutProps {
  children: React.ReactNode;
}

const ClerkLayout = ({ children }: ClerkLayoutProps) => {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
};

export default ClerkLayout;
