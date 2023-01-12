import { proto } from '../../WAProto'

export interface ILabel {
    id: string
    name?: string | null | undefined
    color?: number | null
    predefinedId?: number | null | undefined
    deleted?: boolean | null | undefined
}

export class Label implements proto.SyncActionValue.ILabelEditAction {
    constructor(id: string, data: proto.SyncActionValue.ILabelEditAction) {
        this.id = id
        this.name = data.name || ''
        this.color = data.color || 0
        this.deleted = data.deleted || false
    }

    id: string
    name: string
    color: number
    predefinedId?: number | undefined
    deleted?: boolean | undefined
}
export interface LabelAssociation {
    id: string
    labelId: string
    associatioinId: string
    type: string
}