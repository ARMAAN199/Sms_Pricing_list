import { automationBuilderConstants } from '../../constants/automationBuilder.constants'

const addNode = (payload: any) => {
    return {
        type: automationBuilderConstants.ADD_NODE,
        payload,
    }
}
const setStrategyData = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_STRATEGY_DATA,
        payload,
    }
}
const setFlowChartData = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_FLOWCHART_DATA,
        payload,
    }
}
const setStepsList = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_STEPS_LIST,
        payload,
    }
}
const setFlowChart = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_FLOWCHART,
        payload,
    }
}
const setValidationMap = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_VALIDATION_MAP,
        payload,
    }
}
const setStepsLoading = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_STEPS_LOADING,
        payload,
    }
}
const setPostApiLoading = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_POST_API_LOADING,
        payload,
    }
}
const setNodeConfig = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_NODE_CONFIG,
        payload,
    }
}
const resetAutomationBuilder = () => {
    return {
        type: automationBuilderConstants.RESET_AUTOMATION_BUILDER,
        payload: null,
    }
}
const updateSourceNode = (payload: any) => {
    return {
        type: automationBuilderConstants.UPDATE_SOURCE_NODE,
        payload,
    }
}
const setNodeActions = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_NODE_ACTIONS,
        payload,
    }
}

const updateNode = (payload: any) => {
    return {
        type: automationBuilderConstants.UPDATE_NODE,
        payload,
    }
}

const setTicket = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_TICKET,
        payload,
    }
}

const setTicketLoading = (payload: any) => {
    return {
        type: automationBuilderConstants.SET_TICKET_LOADING,
        payload,
    }
}

export const automationBuilderActions = {
    addNode,
    setStrategyData,
    setFlowChartData,
    setStepsList,
    setFlowChart,
    setValidationMap,
    setStepsLoading,
    setPostApiLoading,
    setNodeConfig,
    resetAutomationBuilder,
    updateSourceNode,
    setNodeActions,
    updateNode,
    setTicket,
    setTicketLoading,
}
