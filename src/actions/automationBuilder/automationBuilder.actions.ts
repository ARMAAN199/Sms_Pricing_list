import { automationBuilderActions } from './automationBuilder.actionCreator'

import { makeDelete, makeGet, makePost } from '../../services/api/api.service'
import {
    ShowSuccessSnackBar,
    ShowErrorSnackBar,
} from '../../services/snackbar/snackbar.service'
import { Pricingdata } from './data'

export const addNode = (data: any) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.addNode(data))
    }
}

export const updateNode = (data: any) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.updateNode(data))
    }
}

export const updateSourceNode = (node: any) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.updateSourceNode(node))
    }
}
export const setFlowChart = (data: any) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setFlowChart(data))
    }
}
export const setValidationMap = (data: any) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setValidationMap(data))
    }
}
export const resetFlowchart = () => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.resetAutomationBuilder())
        dispatch(automationBuilderActions.setStrategyData({}))
        dispatch(automationBuilderActions.setFlowChartData({}))
    }
}
export const setNodeActions = (nodeId: string, action: string) => {
    return (dispatch: any, getState: any) => {
        if (nodeId && action && nodeId !== 'null' && action !== 'null') {
            const state = getState()
            const nodeIndex =
                state.automation.flowchartJson.elements &&
                state.automation.flowchartJson.elements.length
                    ? state.automation.flowchartJson.elements.findIndex(
                          (element: any) => {
                              return element.id === nodeId
                          }
                      )
                    : -1
            if (nodeIndex !== -1) {
                const node = state.automation.flowchartJson.elements[nodeIndex]
                dispatch(
                    automationBuilderActions.setNodeActions({ action, node })
                )
            } else {
                dispatch(automationBuilderActions.setNodeActions({}))
            }
        } else {
            dispatch(automationBuilderActions.setNodeActions({}))
        }
    }
}

export const createStrategy = (data: any, cb?: Function) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setPostApiLoading(true))
        makePost('automation/createStrategy', data).then(
            (res) => {
                if (res && res.success) {
                    dispatch(automationBuilderActions.setStrategyData(res.data))
                    cb && cb(res.data)
                }
                dispatch(automationBuilderActions.setPostApiLoading(false))
            },
            (err) => {
                dispatch(automationBuilderActions.setPostApiLoading(false))
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while creating strategy!'
                )
            }
        )
    }
}
export const createFlowchart = (data: any, cb?: Function) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setPostApiLoading(true))
        makePost('automation/createFlowchart', data).then(
            (res) => {
                if (res && res.success) {
                    dispatch(
                        automationBuilderActions.setFlowChartData(res.data)
                    )
                    dispatch(automationBuilderActions.setPostApiLoading(false))
                    cb && cb(res, data.flow_chart.automation_strategy_id)
                }
            },
            (err) => {
                dispatch(automationBuilderActions.setPostApiLoading(false))
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while creating flowchart!'
                )
            }
        )
    }
}

export const getSteps = (cb?: Function) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setStepsLoading(true))
        makeGet('automation/getStepsListing').then(
            (res) => {
                if (res && res.success) {
                    res.data
                        ? dispatch(
                              automationBuilderActions.setStepsList(res.data)
                          )
                        : dispatch(automationBuilderActions.setStepsList([]))
                    dispatch(automationBuilderActions.setStepsLoading(false))
                    cb && cb(res)
                } else {
                    ShowErrorSnackBar(
                        null,
                        'Something went wrong while loading steps!'
                    )
                }
            },
            (err) => {
                dispatch(automationBuilderActions.setStepsLoading(false))
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while loading steps!'
                )
            }
        )
    }
}
export const getFlowChart = (id: string, cb?: Function) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setPostApiLoading(true))
        makeGet(`automation/getFlowchart?id=${id}`).then(
            (res) => {
                if (res && res.success && res.data && res.data.flow_chart) {
                    dispatch(
                        automationBuilderActions.setStrategyData({
                            automation_strategy: {
                                id: res.data.id,
                                name: res.data.name,
                                created_at: res.data.flow_chart.created_at,
                                updated_at: res.data.flow_chart.updated_at,
                                archived: true,
                                issues: [],
                                version_count: 0,
                            },
                        })
                    )
                    dispatch(
                        automationBuilderActions.setFlowChartData({
                            flow_chart: {
                                id: res.data.flow_chart.id,
                                state: res.data.flow_chart.state,
                            },
                        })
                    )
                    dispatch(automationBuilderActions.setPostApiLoading(false))
                    ShowSuccessSnackBar('Strategy Loaded successfully!')
                    cb && cb(res)
                } else {
                    resetFlowchart()
                    dispatch(automationBuilderActions.setPostApiLoading(false))
                    ShowErrorSnackBar(
                        null,
                        'Something went wrong while loading startegy!'
                    )
                    cb && cb({})
                }
            },
            (err) => {
                dispatch(automationBuilderActions.setPostApiLoading(false))
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while loading startegy!'
                )
            }
        )
    }
}

export const saveFlowchart = (data: any, cb?: Function) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setPostApiLoading(true))
        makePost('automation/saveFlowchart', data).then(
            (res) => {
                if (res && res.success) {
                    // dispatch(
                    //     automationBuilderActions.setFlowChartData(res.data)
                    // )
                    cb && cb(res)

                    ShowSuccessSnackBar('Strategy saved successfully')
                }
                dispatch(automationBuilderActions.setPostApiLoading(false))
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while saving strategy!'
                )
                dispatch(automationBuilderActions.setPostApiLoading(false))
            }
        )
    }
}

export const getCommunications = (query: string, cb?: Function) => {
    return (dispatch: any) => {
        makeGet(`automation/getCommunications?query=${query}`).then(
            (res) => {
                if (res && res.success) {
                    res.data && res.data.records
                        ? cb && cb(res.data.records)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching communications.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching communications.'
                )
            }
        )
    }
}
export const getConfigurations = (payload: any, cb?: Function) => {
    const keys = payload.tags.split(',')
    let appendkeys = ''
    keys.forEach((key: string) => {
        appendkeys = appendkeys + '&keys[]=' + key.trim()
    })

    return (dispatch: any) => {
        makeGet(
            `automation/getConfigurations?query=${payload.query}${appendkeys}`
        ).then(
            (res) => {
                if (res && res.success) {
                    res.data && res.data.records
                        ? cb && cb(res.data.records)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching configurations.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching configurations.'
                )
            }
        )
    }
}

export const getStrategyStepMentionNames = (
    cb?: Function,
    data?: any,
    ecb?: Function
) => {
    return (dispatch: any) => {
        makePost(`automation/getStrategyStepMentionNames`, data).then(
            (res) => {
                if (res && res.success) {
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching Step Mentions.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching Step Mentions'
                )
                ecb && ecb('error')
            }
        )
    }
}

export const getAllConfigurations = (
    query: string,
    page_number: number,
    per_page: number,
    tags?: any,
    cb?: Function,
    ecb?: Function
) => {
    // const keys = tags.split(',')
    // let appendkeys = ''
    // keys.forEach((key: string) => {
    //     appendkeys = appendkeys + '&keys[]=' + key.trim()
    // })
    return (dispatch: any) => {
        let url = `automation/getConfigurations?query=${query}&page=${page_number}&pageSize=${per_page}`

        makeGet(url).then(
            (res) => {
                if (res && res.success) {
                    res.data && res.data.records
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching configurations.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching configurations.'
                )
                ecb && ecb()
            }
        )
    }
}

export const getFilters = (query: string, cb?: Function) => {
    return (dispatch: any) => {
        makeGet(`automation/getFilters?query=${query}`).then(
            (res) => {
                if (res && res.success) {
                    res.data && res.data.records
                        ? cb && cb(res.data.records)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching filters.'
                          )

                    // cb && cb(res)
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching filters.'
                )
            }
        )
    }
}
export const getsfFields = (query: string, cb?: Function) => {
    return (dispatch: any) => {
        makeGet(`automation/getsfFields?query=${query}`).then(
            (res) => {
                if (res && res.success) {
                    res.data && res.data.records
                        ? cb && cb(res.data.records)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching sf_fields.'
                          )

                    // cb && cb(res)
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching sf_fields.'
                )
            }
        )
    }
}

export const setNodeConfig = (
    config: any,
    generationConfig: any,
    nodeId: string
) => {
    return (dispatch: any, getState: any) => {
        const state = getState()
        const nodeIndex =
            state.automation.flowchartJson.elements &&
            state.automation.flowchartJson.elements.length
                ? state.automation.flowchartJson.elements.findIndex(
                      (element: any) => {
                          return element.id === nodeId
                      }
                  )
                : -1

        if (nodeIndex !== -1) {
            const newFlowchart = { ...state.automation.flowchartJson }
            newFlowchart.elements[nodeIndex].data.configs = {}
            newFlowchart.elements[
                nodeIndex
            ].data.configs.issue_configurations = config
            newFlowchart.elements[
                nodeIndex
            ].data.configs.generation_configurations = generationConfig

            dispatch(automationBuilderActions.setFlowChart(newFlowchart))
        }
    }
}

export const uploadStrategy = (data: any, cb: any) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setPostApiLoading(true))
        makePost('automation/uploadStrategy', data).then(
            (res) => {
                if (res && res.success) {
                    // dispatch(
                    //     automationBuilderActions.setFlowChartData(res.data)
                    // )
                    cb && cb(res)

                    ShowSuccessSnackBar('Strategy imported successfully')
                }
                dispatch(automationBuilderActions.setPostApiLoading(false))
            },
            (err) => {
                ShowErrorSnackBar(err, 'Failed to upload the file')
                dispatch(automationBuilderActions.setPostApiLoading(false))
            }
        )
    }
}

export const getStrategies = (
    page: number,
    query: string,
    pageSize: number,
    cb?: Function,
    ecb?: Function
) => {
    // let url = `automation/getStrategies?page=${page}&pageSize=${pageSize}`
    // if (query && query !== '') {
    //     url += '&query=' + query
    // }
    // return (dispatch: any) => {
    //     makeGet(url).then(
    //         (res) => {
    //             if (res && res.success) {
    //                 res.data && res.data
    //                     ? cb && cb(res.data)
    //                     : ShowErrorSnackBar(
    //                           null,
    //                           'Something went wrong while fetching strategies.'
    //                       )

    //                 // cb && cb(res)
    //             }
    //         },
    //         (err) => {
    //             ShowErrorSnackBar(
    //                 err,
    //                 'Something went wrong while fetching strategies.'
    //             )
    //             ecb && ecb()
    //         }
    //     )
    // }

    return (dispatch: any) => {
        setTimeout(() => {
            const data = Pricingdata
            // Dispatch an action to your reducer here, for example:
            // dispatch({ type: 'UPDATE_PRICING_DATA', payload: data });
            ShowSuccessSnackBar(
                'Data fetched successfully! Select Country and Message Type to view pricing.'
            )
            cb && cb(data)
        }, 4000)
    }
}

export const getStepsListing = (
    taglist?: string,
    cb?: Function,
    ecb?: Function
) => {
    let url = `automation/getStepsListing?`
    if (taglist && taglist !== '') {
        url += 'taglist=' + taglist
    }
    return (dispatch: any) => {
        makeGet(url).then(
            (res) => {
                if (res && res.success) {
                    res.data && res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching steps.'
                          )

                    // cb && cb(res)
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching steps.'
                )
                ecb && ecb()
            }
        )
    }
}

export const getStepDetails = (id: number, cb?: Function) => {
    return (dispatch: any) => {
        makeGet(`automation/getStepDetails?id=${id}`).then(
            (res) => {
                if (res && res.success) {
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching step details.'
                          )

                    // cb && cb(res)
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching Step Details.'
                )
            }
        )
    }
}
export const getTagList = (cb?: Function) => {
    return (dispatch: any) => {
        makeGet(`automation/getTagList`).then(
            (res) => {
                if (res && res.success) {
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching tags.'
                          )

                    // cb && cb(res)
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while fetching tags.'
                )
            }
        )
    }
}
export const addTagstoStep = (data: any, cb?: Function) => {
    return (dispatch: any) => {
        makePost(`automation/addTagstoStep`, data).then(
            (res) => {
                if (res && res.success) {
                    ShowSuccessSnackBar('Tags added successfully!')
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while adding tags to steps.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong  while adding tags to steps.'
                )
            }
        )
    }
}
export const deleteTagfromStep = (data: any, cb?: Function) => {
    return (dispatch: any) => {
        makeDelete(`automation/deleteTagfromStep`, data).then(
            (res) => {
                if (res && res.success) {
                    ShowSuccessSnackBar('Tag deleted successfully!')
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while deleting tag from steps.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong  while deleteing tag from steps.'
                )
            }
        )
    }
}

export const getCaseDetails = (id: any, cb?: Function) => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setTicketLoading(true))
        makeGet(`automation/getTicketDetails?id=${id}`).then(
            (res) => {
                if (res && res.success) {
                    res.data
                        ? cb && cb(res)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while fetching step details.'
                          )
                    dispatch(automationBuilderActions.setTicket(res))
                    dispatch(automationBuilderActions.setTicketLoading(false))

                    // cb && cb(res)
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something error occured while fetching Step Details.'
                )
                dispatch(automationBuilderActions.setTicketLoading(false))
            }
        )
    }
}

export const resetTicket = () => {
    return (dispatch: any) => {
        dispatch(automationBuilderActions.setTicket({}))
    }
}

// Create Configs and Related APIS

export const getaddconfigslist = (cb: any) => {
    return (dispatch: any) => {
        makeGet(`automation/getAddConfigsList`).then(
            (res) => {
                if (res && res.success) {
                    ShowSuccessSnackBar('Fetched Configs List successfully!')
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while Fetching Configs Lists.'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    err,
                    'Something went wrong while Fetching Configs Lists.'
                )
            }
        )
    }
}

export const createCongifuration = (data: any, cb?: Function) => {
    return (dispatch: any) => {
        makePost(`automation/createCongifuration`, data).then(
            (res) => {
                if (res && res.success) {
                    ShowSuccessSnackBar('Yay! Config Created successfully!')
                    res.data
                        ? cb && cb(res.data)
                        : ShowErrorSnackBar(
                              null,
                              'Something went wrong while creating this config'
                          )
                }
            },
            (err) => {
                ShowErrorSnackBar(
                    'Something went wrong  while creating this config'
                )
            }
        )
    }
}
