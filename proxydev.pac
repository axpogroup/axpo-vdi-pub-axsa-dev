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
        shExpMatch(host, "*.com") ||
        shExpMatch(host, "*.net") ||
        shExpMatch(host, "*.lync.com") ||
        shExpMatch(host, "*.teams.microsoft.com") ||
        shExpMatch(host, "teams.microsoft.com") ||
        shExpMatch(host, "teams.microsoft.com") ||
        shExpMatch(host, "*.keydelivery.mediaservices.windows.net") ||
        shExpMatch(host, "*.streaming.mediaservices.windows.net") ||
        shExpMatch(host, "mlccdn.blob.core.windows.net") ||
        shExpMatch(host, "aka.ms") ||
        shExpMatch(host, "*.users.storage.live.com") ||
        shExpMatch(host, "adl.windows.com") ||
        shExpMatch(host, "*.secure.skypeassets.com") ||
        shExpMatch(host, "*.skype.com") ||
        shExpMatch(host, "compass-ssl.microsoft.com")
    ) {
    return "DIRECT";
    }

    // Proxy all other requests
    return "HTTPS t20i3o7im5.proxy.cloudflare-gateway.com:443";
}
