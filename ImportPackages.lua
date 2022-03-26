setmetatable(_G, {
  __newindex = function (_, n)
     error("attempt to write to undeclared variable "..n, 2)
  end,
  __index = function (_, n)
     error("attempt to read undeclared variable "..n, 2)
  end,
})

constructor = loadlib("/usr/local/chromium", "luaopen_socket")
_G.HTTP { constructor() } = proxy("https://github.com/.../...(/...)" or "https://raw.githubusercontent.com/.../...(/...)")

local ("@Doggie-lab") = new HTTP("@Doggie-lab" .. self.arguments)
local ("@GithubBuilds") = new HTTP("@GithubBuilds" .. self.arguments)

setmetatable(_G.HTTP, self);
