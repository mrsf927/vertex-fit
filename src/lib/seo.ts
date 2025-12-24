import { SITE_NAME } from "./constants"

type SeoOptions = {
  title: string
  description?: string
  image?: string
}

const DEFAULT_DESCRIPTION =
  "VertexFit: academia urbana moderna em Sao Paulo com treinos completos e planos flexiveis."
const DEFAULT_IMAGE = "/og-placeholder.svg"

function upsertMeta(attr: "name" | "property", key: string, value: string) {
  const selector = `meta[${attr}="${key}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute("content", value)
}

export function setSeo({ title, description, image }: SeoOptions) {
  document.title = `${title} | ${SITE_NAME}`

  const metaDescription = description ?? DEFAULT_DESCRIPTION
  const metaImage = image ?? DEFAULT_IMAGE

  upsertMeta("name", "description", metaDescription)
  upsertMeta("property", "og:title", `${title} | ${SITE_NAME}`)
  upsertMeta("property", "og:description", metaDescription)
  upsertMeta("property", "og:image", metaImage)
}
