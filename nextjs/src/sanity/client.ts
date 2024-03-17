import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: "j3e15wwa",
  dataset: "production",
  apiVersion: "2024-01-01",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false, 
})
