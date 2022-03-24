_G.HTTP { loadlib("/local/HTTP", "luaopen_socket") } = proxy("https://github.com/...(/...)" or "https://raw.githubusercontent.com/...(/...)")

local ("@Mafia-Doggo") = new HTTP("@Mafia-Doggo" .. self.arguments)
local ("@GithubBuilds") = new HTTP("@GithubBuilds" .. self.arguments)

setmetatable(_G.HTTP, self);
