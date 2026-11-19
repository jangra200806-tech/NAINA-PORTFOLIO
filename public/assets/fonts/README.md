# Self-hosted fonts

These files are the **latin subsets** of the fonts used by the site, downloaded
from Google Fonts so the page does not depend on a third-party request.

| File | Family | Weight | Source |
| --- | --- | --- | --- |
| `inter-latin.woff2` | Inter | 400 / 500 / 600 (variable) | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2 |
| `poppins-500-latin.woff2` | Poppins | 500 | https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2 |
| `poppins-600-latin.woff2` | Poppins | 600 | https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2 |
| `poppins-700-latin.woff2` | Poppins | 700 | https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2 |

Both families are licensed under the **SIL Open Font License 1.1**:

- Inter — https://github.com/rsms/inter
- Poppins — https://github.com/itfoundry/Poppins

The `@font-face` rules live at the top of `css/style.css`. If you add a language
that needs accented or non-latin characters, download the matching subset from
Google Fonts and add another `unicode-range` rule.
