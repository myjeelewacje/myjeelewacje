import { BLOG_POSTS } from '@/data/site'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return BLOG_POSTS.map((p) => ({ slug: p.slug })) }

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()
  return <main><section className="page-hero"><span className="eyebrow">Blog SEO</span><h1>{post.title}</h1><p>{post.excerpt}</p></section><section className="content"><p>To jest przygotowany szablon wpisu. W panelu CMS można dodać pełną treść, zdjęcia, FAQ i meta tagi. Ten typ treści warto wykorzystać do pozyskiwania ruchu z Google na pytania klientów.</p><h2>Co wpływa na koszt i zakres usługi?</h2><p>Metraż, wysokość, rodzaj powierzchni, stopień zabrudzenia, dostęp do wody, lokalizacja oraz potrzeba dodatkowego zabezpieczenia powierzchni.</p></section></main>
}
