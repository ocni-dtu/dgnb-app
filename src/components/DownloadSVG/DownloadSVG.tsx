import { ActionIcon, Tooltip } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'

export const DownloadSVG = () => {
  const downloadSVGasTextFile = () => {
    const base64doc = btoa(decodeURIComponent(encodeURIComponent(document.querySelector('svg')?.outerHTML || '')))
    const a = document.createElement('a')
    const e = new MouseEvent('click')

    a.download = 'dgnb.svg'
    a.href = 'data:text/html;base64,' + base64doc
    a.dispatchEvent(e)
    window.umami.track('Download SVG Button')
  }

  return (
    <ActionIcon
      variant='default'
      aria-label='Download'
      onClick={downloadSVGasTextFile}
      size='lg'
      radius='xl'
      style={{ float: 'right' }}
    >
      <Tooltip label='Download SVG'>
        <IconDownload style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </Tooltip>
    </ActionIcon>
  )
}
