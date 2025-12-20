const nextConfig = {
  // Agar tum custom loaders use kar rahe ho to ise root pe rakho
  turbo: {
    rules: {
      // ... tumhare rules
    }
  },
  
  experimental: {
    // baki experimental features yaha rehne do, par 'turbo' hata do
  }
};

export default nextConfig;