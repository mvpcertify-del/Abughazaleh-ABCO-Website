# Board portraits

Drop the client's photographs into this folder using exactly these filenames.
The site picks them up automatically on the next build — no code change needed.
Until a file exists, that board member shows a gold monogram placeholder.

| File                          | Person                                |
| ----------------------------- | ------------------------------------- |
| `marwan-abu-ghazaleh.jpg`     | Mr. Marwan Abu-Ghazaleh — Chairman    |
| `midhat-abu-ghazaleh.jpg`     | Midhat Abu-Ghazaleh — CEO             |
| `hassan-abu-ghazaleh.jpg`     | Hassan Abu-Ghazaleh — Board Member    |
| `nabil-abu-ghazaleh.jpg`      | Nabil Abu-Ghazaleh — Board Member     |

**Recommended:** portrait orientation, at least 800 × 1000 px, subject's head in
the upper third (images are cropped from the top). JPG or WebP.

To use a different filename or format, edit the `photo` field for that person in
`src/lib/site.ts`.

LinkedIn URLs are also set per person in `src/lib/site.ts` — they currently point
at linkedin.com and need the real profile links.
