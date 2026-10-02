# Board portraits

Drop the client's photographs into this folder using exactly these filenames.
All four are in place. To replace one, overwrite the file with the same name —
the site picks it up on the next build. If a file is missing, that board member
falls back to a drawn silhouette.

| File                          | Person                                |
| ----------------------------- | ------------------------------------- |
| `marwan-abu-ghazaleh.jpg`     | Mr. Marwan Abu-Ghazaleh — Chairman    |
| `midhat-abu-ghazaleh.jpg`     | Midhat Abu-Ghazaleh — CEO             |
| `hassan-abu-ghazaleh.jpg`     | Hassan Abu-Ghazaleh — Board Member    |
| `nabil-abu-ghazaleh.jpg`      | Nabil Abu-Ghazaleh — Board Member     |

Images are normalised to a 4:5 portrait JPEG (max 760 px wide) so the cards
match. Supply at least 800 × 1000 px, subject's head in
the upper third (images are cropped from the top). JPG or WebP.

To use a different filename or format, edit the `photo` field for that person in
`src/lib/site.ts`.

LinkedIn URLs are also set per person in `src/lib/site.ts`. Midhat's is live; the
other three still point at linkedin.com and need the real profile links.
