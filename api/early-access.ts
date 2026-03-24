import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
  { auth: { persistSession: false } }
)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const podcast = typeof body.podcast === 'string' ? body.podcast.trim() : ''

    if (!email.includes('@') || podcast.length < 2) {
      return Response.json(
        { error: 'Email and podcast are required.' },
        { status: 400 }
      )
    }

    const { error: insertError } = await supabase
      .from('early_access_submissions')
      .insert({ email, podcast })

    if (!insertError) {
      return Response.json(
        { ok: true, updated: false },
        { status: 201 }
      )
    }

    if (insertError.code === '23505') {
      const { error: updateError } = await supabase
        .from('early_access_submissions')
        .update({ podcast, submitted_at: new Date().toISOString() })
        .eq('email', email)

      if (updateError) {
        return Response.json(
          { error: 'Something went wrong. Please try again.' },
          { status: 500 }
        )
      }

      return Response.json(
        { ok: true, updated: true },
        { status: 200 }
      )
    }

    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  } catch {
    return Response.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    )
  }
}
