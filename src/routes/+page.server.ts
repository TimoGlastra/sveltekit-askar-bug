import type { PageServerLoad } from './$types';
import { ariesAskar } from '@hyperledger/aries-askar-nodejs'

export const load = (() => {
	ariesAskar.storeGenerateRawKey({})

	return {}
}) satisfies PageServerLoad
