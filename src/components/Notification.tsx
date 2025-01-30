import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react'
import { ReactNode } from 'react'
import toast, { ToastOptions } from 'react-hot-toast'

import { ClusterExplorer } from '@/config'
import { LinkType as ExplorerLinkType } from '@/utils/explorer'

type NotificationType = 'success' | 'error' | 'info' | 'warning'
type LinkType = ExplorerLinkType

interface NotificationOptions {
  message: string
  type: NotificationType
  linkType?: LinkType
  linkDest?: string
  duration?: number
}

interface NotificationProps {
  t: {
    visible: boolean
    id: string
  }
  message: string
  type: NotificationType
  linkType?: LinkType
  linkDest?: string
}

const defaultOptions: ToastOptions = {
  duration: 5000,
  position: 'bottom-right',
  className: 'font-montserrat',
}

function getIcon(type: NotificationType): ReactNode {
  const iconProps = { className: 'w-5 h-5', strokeWidth: 2 }

  switch (type) {
    case 'success':
      return <CheckCircle {...iconProps} className="text-electric-blue" />
    case 'error':
      return <XCircle {...iconProps} className="text-red-500" />
    case 'warning':
      return <AlertCircle {...iconProps} className="text-yellow-500" />
    case 'info':
      return <Info {...iconProps} className="text-luminous-turquoise" />
    default:
      return null
  }
}

function getExplorerLink(type: LinkType, dest: string) {
  switch (type) {
    case ExplorerLinkType.Address:
      return ClusterExplorer.address(dest)
    case ExplorerLinkType.Tx:
      return ClusterExplorer.tx(dest)
    default:
      return { entity: dest, link: '#' }
  }
}

function NotificationContent({ t, message, type, linkType, linkDest }: NotificationProps) {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-black shadow-xl rounded-lg pointer-events-auto flex ring-1 ring-electric-blue/20 border border-electric-blue/10`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">{getIcon(type)}</div>
          <div className="ml-3 flex-1">
            <p className="text-base font-montserrat text-soft-silver">{message}</p>
            {linkType && linkDest && (
              <a
                href={getExplorerLink(linkType, linkDest).link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-base text-electric-blue hover:text-luminous-turquoise"
              >
                View {linkType}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex border-l border-electric-blue/20">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-base font-montserrat text-soft-silver hover:text-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export function notify(options: NotificationOptions) {
  const { message, type, linkType, linkDest, duration } = options

  toast.custom(
    (t) => <NotificationContent t={t} message={message} type={type} linkType={linkType} linkDest={linkDest} />,
    {
      ...defaultOptions,
      duration,
    }
  )
}
