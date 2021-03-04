import Sentry from '@sentry/vue'
import { Integrations as TracingIntegrations } from '@sentry/tracing'
import { VueOptions } from '@sentry/vue/dist/sdk'

type Options = Partial<Omit<VueOptions, 'tracingOptions'> & {
    tracingOptions: Partial<{
        trackComponents: boolean | string[]
        timeout: number
        hooks: Array<'activate' | 'create' | 'destroy' | 'mount' | 'update'>
    }>;
}>

export default function init (options: Options) {
    // dsnProjectIndex 需要修改
    // 具体怎么创建项目看 http://192.168.3.103:9000/organizations/xiangju/projects/
    const CONFIG = {
        dsnSecretKey: 'af730942cf6f45e5ba196e1cdd0c1b54',
        dsnProjectIndex: 9,
        dsnSendAddr: 'ssl.malmam.com/xiangju.sentry',
        dsnHttp: 'https'
    }

    //  && !_env.isDev
    const dsn = `${CONFIG.dsnHttp}://${CONFIG.dsnSecretKey}@${CONFIG.dsnSendAddr}/${CONFIG.dsnProjectIndex}`

    Sentry.init({
        dsn,
        tracingOptions: {
            trackComponents: true
        },
        tracesSampleRate: 0.2,
        integrations: [
            new TracingIntegrations.BrowserTracing(
                {
                    startTransactionOnLocationChange: false
                }
            )
        ],
        ...options
    })
}
