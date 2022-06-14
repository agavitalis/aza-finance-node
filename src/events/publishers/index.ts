import {trackTransactionEvents} from './transaction.events'

export async function publishEvents() {
    await trackTransactionEvents()
}