function FindProxyForURL(url, host) {
    // No proxy for private (RFC 1918) IP addresses (intranet sites)
    if (
      isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
      isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
      isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")
    ) {
      return "DIRECT";
    }
  
    // No proxy for localhost
    if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
      return "DIRECT";
    }
  
    // No proxy for Teams Communications
    if (
      dnsDomainIs(host, "*.lync.com") ||
      dnsDomainIs(host, "*.teams.microsoft.com") ||
      dnsDomainIs(host, "teams.microsoft.com") ||
      dnsDomainIs(host, "teams.microsoft.com") ||
      dnsDomainIs(host, "*.keydelivery.mediaservices.windows.net") ||
      dnsDomainIs(host, "*.streaming.mediaservices.windows.net") ||
      dnsDomainIs(host, "mlccdn.blob.core.windows.net") ||
      dnsDomainIs(host, "aka.ms") ||
      dnsDomainIs(host, "*.users.storage.live.com") ||
      dnsDomainIs(host, "adl.windows.com") ||
      dnsDomainIs(host, "*.secure.skypeassets.com") ||
      dnsDomainIs(host, "*.skype.com") ||
      dnsDomainIs(host, "compass-ssl.microsoft.com")
    ) {
      return "DIRECT";
    }

    // Proxy all other requests
    return "HTTPS t20i3o7im5.proxy.cloudflare-gateway.com:443";
}
