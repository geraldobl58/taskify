import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";

import { ModalProvider } from "@/providers/modal-provider";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
