import { AnyAction } from 'redux'
import { automationBuilderConstants } from '../constants/automationBuilder.constants'

const automationDefaultState = {
    nodes: [],
    strategy: {},
    flowchart: {},
    stepsList: [],
    flowchartJson: { elements: [] },
    validationMap: {},
    isStepsLoading: false,
    isPostApiLoading: false, //single state for post api calls , since at any instant only post call would be made from frontend.
    nodeAction: {},
    currentTicket: {},
    isTicketLoading: false,
    searchNodeId: {},
    colorTheme: {},
}

const automationReducer = (
    state = automationDefaultState,
    action: AnyAction
) => {
    switch (action.type) {
        case automationBuilderConstants.ADD_NODE:
            return {
                ...state,
                nodes: action.payload,
                validationMap: {
                    ...state.validationMap,
                    [action.payload.id]: action.payload.data,
                },
            }
        case automationBuilderConstants.SET_STRATEGY_DATA:
            return { ...state, strategy: action.payload }
        case automationBuilderConstants.SET_FLOWCHART_DATA:
            return { ...state, flowchart: action.payload }
        case automationBuilderConstants.SET_STEPS_LIST:
            return { ...state, stepsList: action.payload }
        case automationBuilderConstants.SET_STEPS_LOADING:
            return { ...state, isStepsLoading: action.payload }
        case automationBuilderConstants.SET_POST_API_LOADING:
            return { ...state, isPostApiLoading: action.payload }
        case automationBuilderConstants.SET_FLOWCHART:
            return { ...state, flowchartJson: action.payload }
        case automationBuilderConstants.SET_NODE_CONFIG:
            return { ...state, flowchartJson: action.payload }
        case automationBuilderConstants.SET_VALIDATION_MAP:
            return { ...state, validationMap: action.payload }
        case automationBuilderConstants.RESET_AUTOMATION_BUILDER:
            return automationDefaultState
        case automationBuilderConstants.SET_NODE_ACTIONS:
            return { ...state, nodeAction: action.payload }
        case automationBuilderConstants.UPDATE_SOURCE_NODE:
            return {
                ...state,
                flowchartJson: {
                    ...state.flowchartJson,
                    elements: [
                        action.payload,
                        ...state.flowchartJson.elements.slice(
                            1,
                            state.flowchartJson.elements.length
                        ),
                    ],
                },
            }
        case automationBuilderConstants.SET_TICKET:
            return { ...state, currentTicket: action.payload }
        case automationBuilderConstants.SET_TICKET_LOADING:
            return { ...state, isTicketLoading: action.payload }
        case automationBuilderConstants.CHANGE_COLOR_THEME:
            return { ...state, colorTheme: action.payload }
        default:
            return state
    }
}

export default automationReducer
