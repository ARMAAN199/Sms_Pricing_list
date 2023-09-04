/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from 'protobufjs/minimal.js'

// Common aliases
const $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util

// Exported root namespace
const $root =
    $protobuf.roots['web.gojek.clickstream.products.events.ui.Component'] ||
    ($protobuf.roots['web.gojek.clickstream.products.events.ui.Component'] = {})

export const web = ($root.web = (() => {
    /**
     * Namespace web.
     * @exports web
     * @namespace
     */
    const web = {}

    web.gojek = (function () {
        /**
         * Namespace gojek.
         * @memberof web
         * @namespace
         */
        const gojek = {}

        gojek.clickstream = (function () {
            /**
             * Namespace clickstream.
             * @memberof web.gojek
             * @namespace
             */
            const clickstream = {}

            clickstream.products = (function () {
                /**
                 * Namespace products.
                 * @memberof web.gojek.clickstream
                 * @namespace
                 */
                const products = {}

                products.events = (function () {
                    /**
                     * Namespace events.
                     * @memberof web.gojek.clickstream.products
                     * @namespace
                     */
                    const events = {}

                    events.ui = (function () {
                        /**
                         * Namespace ui.
                         * @memberof web.gojek.clickstream.products.events
                         * @namespace
                         */
                        const ui = {}

                        ui.Component = (function () {
                            /**
                             * Properties of a Component.
                             * @memberof web.gojek.clickstream.products.events.ui
                             * @interface IComponent
                             * @property {web.gojek.clickstream.products.common.IExportDetails|null} [exportDetails] Component exportDetails
                             * @property {web.gojek.clickstream.products.common.ISaveDetails|null} [saveDetails] Component saveDetails
                             * @property {web.gojek.clickstream.products.common.ISearchDetails|null} [searchDetails] Component searchDetails
                             * @property {web.gojek.clickstream.products.common.IStrategyDetails|null} [strategy] Component strategy
                             * @property {web.gojek.clickstream.products.common.ICreateDetails|null} [createDetails] Component createDetails
                             * @property {web.gojek.clickstream.products.common.IReadDetails|null} [readDetails] Component readDetails
                             * @property {web.gojek.clickstream.products.common.IStepDetails|null} [stepDetails] Component stepDetails
                             * @property {string|null} [eventName] Component eventName
                             * @property {google.protobuf.ITimestamp|null} [eventTimestamp] Component eventTimestamp
                             * @property {web.gojek.clickstream.meta.IEventMeta|null} [meta] Component meta
                             * @property {web.gojek.clickstream.products.common.Product|null} [product] Component product
                             */

                            /**
                             * Constructs a new Component.
                             * @memberof web.gojek.clickstream.products.events.ui
                             * @classdesc Represents a Component.
                             * @implements IComponent
                             * @constructor
                             * @param {web.gojek.clickstream.products.events.ui.IComponent=} [properties] Properties to set
                             */
                            function Component(properties) {
                                if (properties)
                                    for (
                                        let keys = Object.keys(properties),
                                            i = 0;
                                        i < keys.length;
                                        ++i
                                    )
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]]
                            }

                            /**
                             * Component exportDetails.
                             * @member {web.gojek.clickstream.products.common.IExportDetails|null|undefined} exportDetails
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.exportDetails = null

                            /**
                             * Component saveDetails.
                             * @member {web.gojek.clickstream.products.common.ISaveDetails|null|undefined} saveDetails
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.saveDetails = null

                            /**
                             * Component searchDetails.
                             * @member {web.gojek.clickstream.products.common.ISearchDetails|null|undefined} searchDetails
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.searchDetails = null

                            /**
                             * Component strategy.
                             * @member {web.gojek.clickstream.products.common.IStrategyDetails|null|undefined} strategy
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.strategy = null

                            /**
                             * Component createDetails.
                             * @member {web.gojek.clickstream.products.common.ICreateDetails|null|undefined} createDetails
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.createDetails = null

                            /**
                             * Component readDetails.
                             * @member {web.gojek.clickstream.products.common.IReadDetails|null|undefined} readDetails
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.readDetails = null

                            /**
                             * Component stepDetails.
                             * @member {web.gojek.clickstream.products.common.IStepDetails|null|undefined} stepDetails
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.stepDetails = null

                            /**
                             * Component eventName.
                             * @member {string} eventName
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.eventName = ''

                            /**
                             * Component eventTimestamp.
                             * @member {google.protobuf.ITimestamp|null|undefined} eventTimestamp
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.eventTimestamp = null

                            /**
                             * Component meta.
                             * @member {web.gojek.clickstream.meta.IEventMeta|null|undefined} meta
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.meta = null

                            /**
                             * Component product.
                             * @member {web.gojek.clickstream.products.common.Product} product
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @instance
                             */
                            Component.prototype.product = 0

                            /**
                             * Creates a new Component instance using the specified properties.
                             * @function create
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @static
                             * @param {web.gojek.clickstream.products.events.ui.IComponent=} [properties] Properties to set
                             * @returns {web.gojek.clickstream.products.events.ui.Component} Component instance
                             */
                            Component.create = function create(properties) {
                                return new Component(properties)
                            }

                            /**
                             * Encodes the specified Component message. Does not implicitly {@link web.gojek.clickstream.products.events.ui.Component.verify|verify} messages.
                             * @function encode
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @static
                             * @param {web.gojek.clickstream.products.events.ui.IComponent} message Component message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Component.encode = function encode(
                                message,
                                writer
                            ) {
                                if (!writer) writer = $Writer.create()
                                if (
                                    message.exportDetails != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'exportDetails'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.ExportDetails.encode(
                                        message.exportDetails,
                                        writer
                                            .uint32(/* id 1, wireType 2 =*/ 10)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.saveDetails != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'saveDetails'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.SaveDetails.encode(
                                        message.saveDetails,
                                        writer
                                            .uint32(/* id 2, wireType 2 =*/ 18)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.searchDetails != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'searchDetails'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.SearchDetails.encode(
                                        message.searchDetails,
                                        writer
                                            .uint32(/* id 3, wireType 2 =*/ 26)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.strategy != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'strategy'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.StrategyDetails.encode(
                                        message.strategy,
                                        writer
                                            .uint32(/* id 4, wireType 2 =*/ 34)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.createDetails != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'createDetails'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.CreateDetails.encode(
                                        message.createDetails,
                                        writer
                                            .uint32(/* id 5, wireType 2 =*/ 42)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.readDetails != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'readDetails'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.ReadDetails.encode(
                                        message.readDetails,
                                        writer
                                            .uint32(/* id 6, wireType 2 =*/ 50)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.stepDetails != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'stepDetails'
                                    )
                                )
                                    $root.web.gojek.clickstream.products.common.StepDetails.encode(
                                        message.stepDetails,
                                        writer
                                            .uint32(/* id 7, wireType 2 =*/ 58)
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.eventName != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'eventName'
                                    )
                                )
                                    writer
                                        .uint32(/* id 100, wireType 2 =*/ 802)
                                        .string(message.eventName)
                                if (
                                    message.eventTimestamp != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'eventTimestamp'
                                    )
                                )
                                    $root.google.protobuf.Timestamp.encode(
                                        message.eventTimestamp,
                                        writer
                                            .uint32(
                                                /* id 101, wireType 2 =*/ 810
                                            )
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.meta != null &&
                                    Object.hasOwnProperty.call(message, 'meta')
                                )
                                    $root.web.gojek.clickstream.meta.EventMeta.encode(
                                        message.meta,
                                        writer
                                            .uint32(
                                                /* id 102, wireType 2 =*/ 818
                                            )
                                            .fork()
                                    ).ldelim()
                                if (
                                    message.product != null &&
                                    Object.hasOwnProperty.call(
                                        message,
                                        'product'
                                    )
                                )
                                    writer
                                        .uint32(/* id 103, wireType 0 =*/ 824)
                                        .int32(message.product)
                                return writer
                            }

                            /**
                             * Decodes a Component message from the specified reader or buffer.
                             * @function decode
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {web.gojek.clickstream.products.events.ui.Component} Component
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Component.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader)
                                let end =
                                        length === undefined
                                            ? reader.len
                                            : reader.pos + length,
                                    message = new $root.web.gojek.clickstream.products.events.ui.Component()
                                while (reader.pos < end) {
                                    let tag = reader.uint32()
                                    console.log(message)
                                    switch (tag >>> 3) {
                                        case 1: {
                                            message.exportDetails = $root.web.gojek.clickstream.products.common.ExportDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 2: {
                                            message.saveDetails = $root.web.gojek.clickstream.products.common.SaveDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 3: {
                                            message.searchDetails = $root.web.gojek.clickstream.products.common.SearchDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 4: {
                                            message.strategy = $root.web.gojek.clickstream.products.common.StrategyDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 5: {
                                            message.createDetails = $root.web.gojek.clickstream.products.common.CreateDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 6: {
                                            message.readDetails = $root.web.gojek.clickstream.products.common.ReadDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 7: {
                                            message.stepDetails = $root.web.gojek.clickstream.products.common.StepDetails.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 100: {
                                            message.eventName = reader.string()
                                            break
                                        }
                                        case 101: {
                                            message.eventTimestamp = $root.google.protobuf.Timestamp.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 102: {
                                            message.meta = $root.web.gojek.clickstream.meta.EventMeta.decode(
                                                reader,
                                                reader.uint32()
                                            )
                                            break
                                        }
                                        case 103: {
                                            message.product = reader.int32()
                                            break
                                        }
                                        default:
                                            reader.skipType(tag & 7)
                                            break
                                    }
                                }
                                return message
                            }

                            /**
                             * Verifies a Component message.
                             * @function verify
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Component.verify = function verify(message) {
                                if (
                                    typeof message !== 'object' ||
                                    message === null
                                )
                                    return 'object expected'
                                if (
                                    message.exportDetails != null &&
                                    message.hasOwnProperty('exportDetails')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.ExportDetails.verify(
                                        message.exportDetails
                                    )
                                    if (error) return 'exportDetails.' + error
                                }
                                if (
                                    message.saveDetails != null &&
                                    message.hasOwnProperty('saveDetails')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.SaveDetails.verify(
                                        message.saveDetails
                                    )
                                    if (error) return 'saveDetails.' + error
                                }
                                if (
                                    message.searchDetails != null &&
                                    message.hasOwnProperty('searchDetails')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.SearchDetails.verify(
                                        message.searchDetails
                                    )
                                    if (error) return 'searchDetails.' + error
                                }
                                if (
                                    message.strategy != null &&
                                    message.hasOwnProperty('strategy')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.StrategyDetails.verify(
                                        message.strategy
                                    )
                                    if (error) return 'strategy.' + error
                                }
                                if (
                                    message.createDetails != null &&
                                    message.hasOwnProperty('createDetails')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.CreateDetails.verify(
                                        message.createDetails
                                    )
                                    if (error) return 'createDetails.' + error
                                }
                                if (
                                    message.readDetails != null &&
                                    message.hasOwnProperty('readDetails')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.ReadDetails.verify(
                                        message.readDetails
                                    )
                                    if (error) return 'readDetails.' + error
                                }
                                if (
                                    message.stepDetails != null &&
                                    message.hasOwnProperty('stepDetails')
                                ) {
                                    let error = $root.web.gojek.clickstream.products.common.StepDetails.verify(
                                        message.stepDetails
                                    )
                                    if (error) return 'stepDetails.' + error
                                }
                                if (
                                    message.eventName != null &&
                                    message.hasOwnProperty('eventName')
                                )
                                    if (!$util.isString(message.eventName))
                                        return 'eventName: string expected'
                                if (
                                    message.eventTimestamp != null &&
                                    message.hasOwnProperty('eventTimestamp')
                                ) {
                                    let error = $root.google.protobuf.Timestamp.verify(
                                        message.eventTimestamp
                                    )
                                    if (error) return 'eventTimestamp.' + error
                                }
                                if (
                                    message.meta != null &&
                                    message.hasOwnProperty('meta')
                                ) {
                                    let error = $root.web.gojek.clickstream.meta.EventMeta.verify(
                                        message.meta
                                    )
                                    if (error) return 'meta.' + error
                                }
                                if (
                                    message.product != null &&
                                    message.hasOwnProperty('product')
                                )
                                    switch (message.product) {
                                        default:
                                            return 'product: enum value expected'
                                        case 0:
                                        case 1:
                                            break
                                    }
                                return null
                            }

                            /**
                             * Gets the default type url for Component
                             * @function getTypeUrl
                             * @memberof web.gojek.clickstream.products.events.ui.Component
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Component.getTypeUrl = function getTypeUrl(
                                typeUrlPrefix
                            ) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = 'type.googleapis.com'
                                }
                                return (
                                    typeUrlPrefix +
                                    '/web.gojek.clickstream.products.events.ui.Component'
                                )
                            }

                            return Component
                        })()

                        return ui
                    })()

                    return events
                })()

                products.common = (function () {
                    /**
                     * Namespace common.
                     * @memberof web.gojek.clickstream.products
                     * @namespace
                     */
                    const common = {}

                    /**
                     * Product enum.
                     * @name web.gojek.clickstream.products.common.Product
                     * @enum {number}
                     * @property {number} PRODUCT_UNSPECIFIED=0 PRODUCT_UNSPECIFIED value
                     * @property {number} PRODUCT_TICKETING=1 PRODUCT_TICKETING value
                     */
                    common.Product = (function () {
                        const valuesById = {},
                            values = Object.create(valuesById)
                        values[(valuesById[0] = 'PRODUCT_UNSPECIFIED')] = 0
                        values[(valuesById[1] = 'PRODUCT_TICKETING')] = 1
                        return values
                    })()

                    common.ExportDetails = (function () {
                        /**
                         * Properties of an ExportDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface IExportDetails
                         * @property {number|Long|null} [id] ExportDetails id
                         * @property {string|null} [item] ExportDetails item
                         * @property {string|null} [type] ExportDetails type
                         * @property {string|null} [label] ExportDetails label
                         * @property {string|null} [message] ExportDetails message
                         * @property {string|null} [response] ExportDetails response
                         */

                        /**
                         * Constructs a new ExportDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents an ExportDetails.
                         * @implements IExportDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.IExportDetails=} [properties] Properties to set
                         */
                        function ExportDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * ExportDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @instance
                         */
                        ExportDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * ExportDetails item.
                         * @member {string} item
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @instance
                         */
                        ExportDetails.prototype.item = ''

                        /**
                         * ExportDetails type.
                         * @member {string} type
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @instance
                         */
                        ExportDetails.prototype.type = ''

                        /**
                         * ExportDetails label.
                         * @member {string} label
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @instance
                         */
                        ExportDetails.prototype.label = ''

                        /**
                         * ExportDetails message.
                         * @member {string} message
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @instance
                         */
                        ExportDetails.prototype.message = ''

                        /**
                         * ExportDetails response.
                         * @member {string} response
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @instance
                         */
                        ExportDetails.prototype.response = ''

                        /**
                         * Creates a new ExportDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IExportDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.ExportDetails} ExportDetails instance
                         */
                        ExportDetails.create = function create(properties) {
                            return new ExportDetails(properties)
                        }

                        /**
                         * Encodes the specified ExportDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.ExportDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IExportDetails} message ExportDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ExportDetails.encode = function encode(
                            message,
                            writer
                        ) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.item != null &&
                                Object.hasOwnProperty.call(message, 'item')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.item)
                            if (
                                message.type != null &&
                                Object.hasOwnProperty.call(message, 'type')
                            )
                                writer
                                    .uint32(/* id 3, wireType 2 =*/ 26)
                                    .string(message.type)
                            if (
                                message.label != null &&
                                Object.hasOwnProperty.call(message, 'label')
                            )
                                writer
                                    .uint32(/* id 4, wireType 2 =*/ 34)
                                    .string(message.label)
                            if (
                                message.message != null &&
                                Object.hasOwnProperty.call(message, 'message')
                            )
                                writer
                                    .uint32(/* id 5, wireType 2 =*/ 42)
                                    .string(message.message)
                            if (
                                message.response != null &&
                                Object.hasOwnProperty.call(message, 'response')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.response)
                            return writer
                        }

                        /**
                         * Decodes an ExportDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.ExportDetails} ExportDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ExportDetails.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.ExportDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.item = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.type = reader.string()
                                        break
                                    }
                                    case 4: {
                                        message.label = reader.string()
                                        break
                                    }
                                    case 5: {
                                        message.message = reader.string()
                                        break
                                    }
                                    case 6: {
                                        message.response = reader.string()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies an ExportDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ExportDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.item != null &&
                                message.hasOwnProperty('item')
                            )
                                if (!$util.isString(message.item))
                                    return 'item: string expected'
                            if (
                                message.type != null &&
                                message.hasOwnProperty('type')
                            )
                                if (!$util.isString(message.type))
                                    return 'type: string expected'
                            if (
                                message.label != null &&
                                message.hasOwnProperty('label')
                            )
                                if (!$util.isString(message.label))
                                    return 'label: string expected'
                            if (
                                message.message != null &&
                                message.hasOwnProperty('message')
                            )
                                if (!$util.isString(message.message))
                                    return 'message: string expected'
                            if (
                                message.response != null &&
                                message.hasOwnProperty('response')
                            )
                                if (!$util.isString(message.response))
                                    return 'response: string expected'
                            return null
                        }

                        /**
                         * Gets the default type url for ExportDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.ExportDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ExportDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.ExportDetails'
                            )
                        }

                        return ExportDetails
                    })()

                    common.SaveDetails = (function () {
                        /**
                         * Properties of a SaveDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface ISaveDetails
                         * @property {number|Long|null} [id] SaveDetails id
                         * @property {string|null} [item] SaveDetails item
                         * @property {string|null} [type] SaveDetails type
                         * @property {string|null} [order] SaveDetails order
                         * @property {string|null} [label] SaveDetails label
                         * @property {string|null} [message] SaveDetails message
                         * @property {string|null} [response] SaveDetails response
                         */

                        /**
                         * Constructs a new SaveDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents a SaveDetails.
                         * @implements ISaveDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.ISaveDetails=} [properties] Properties to set
                         */
                        function SaveDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * SaveDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * SaveDetails item.
                         * @member {string} item
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.item = ''

                        /**
                         * SaveDetails type.
                         * @member {string} type
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.type = ''

                        /**
                         * SaveDetails order.
                         * @member {string} order
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.order = ''

                        /**
                         * SaveDetails label.
                         * @member {string} label
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.label = ''

                        /**
                         * SaveDetails message.
                         * @member {string} message
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.message = ''

                        /**
                         * SaveDetails response.
                         * @member {string} response
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @instance
                         */
                        SaveDetails.prototype.response = ''

                        /**
                         * Creates a new SaveDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.ISaveDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.SaveDetails} SaveDetails instance
                         */
                        SaveDetails.create = function create(properties) {
                            return new SaveDetails(properties)
                        }

                        /**
                         * Encodes the specified SaveDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.SaveDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.ISaveDetails} message SaveDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SaveDetails.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.item != null &&
                                Object.hasOwnProperty.call(message, 'item')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.item)
                            if (
                                message.type != null &&
                                Object.hasOwnProperty.call(message, 'type')
                            )
                                writer
                                    .uint32(/* id 3, wireType 2 =*/ 26)
                                    .string(message.type)
                            if (
                                message.order != null &&
                                Object.hasOwnProperty.call(message, 'order')
                            )
                                writer
                                    .uint32(/* id 4, wireType 2 =*/ 34)
                                    .string(message.order)
                            if (
                                message.label != null &&
                                Object.hasOwnProperty.call(message, 'label')
                            )
                                writer
                                    .uint32(/* id 5, wireType 2 =*/ 42)
                                    .string(message.label)
                            if (
                                message.message != null &&
                                Object.hasOwnProperty.call(message, 'message')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.message)
                            if (
                                message.response != null &&
                                Object.hasOwnProperty.call(message, 'response')
                            )
                                writer
                                    .uint32(/* id 7, wireType 2 =*/ 58)
                                    .string(message.response)
                            return writer
                        }

                        /**
                         * Decodes a SaveDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.SaveDetails} SaveDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SaveDetails.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.SaveDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.item = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.type = reader.string()
                                        break
                                    }
                                    case 4: {
                                        message.order = reader.string()
                                        break
                                    }
                                    case 5: {
                                        message.label = reader.string()
                                        break
                                    }
                                    case 6: {
                                        message.message = reader.string()
                                        break
                                    }
                                    case 7: {
                                        message.response = reader.string()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies a SaveDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SaveDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.item != null &&
                                message.hasOwnProperty('item')
                            )
                                if (!$util.isString(message.item))
                                    return 'item: string expected'
                            if (
                                message.type != null &&
                                message.hasOwnProperty('type')
                            )
                                if (!$util.isString(message.type))
                                    return 'type: string expected'
                            if (
                                message.order != null &&
                                message.hasOwnProperty('order')
                            )
                                if (!$util.isString(message.order))
                                    return 'order: string expected'
                            if (
                                message.label != null &&
                                message.hasOwnProperty('label')
                            )
                                if (!$util.isString(message.label))
                                    return 'label: string expected'
                            if (
                                message.message != null &&
                                message.hasOwnProperty('message')
                            )
                                if (!$util.isString(message.message))
                                    return 'message: string expected'
                            if (
                                message.response != null &&
                                message.hasOwnProperty('response')
                            )
                                if (!$util.isString(message.response))
                                    return 'response: string expected'
                            return null
                        }

                        /**
                         * Gets the default type url for SaveDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.SaveDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SaveDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.SaveDetails'
                            )
                        }

                        return SaveDetails
                    })()

                    common.SearchDetails = (function () {
                        /**
                         * Properties of a SearchDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface ISearchDetails
                         * @property {number|Long|null} [id] SearchDetails id
                         * @property {string|null} [item] SearchDetails item
                         * @property {string|null} [type] SearchDetails type
                         * @property {string|null} [result] SearchDetails result
                         * @property {number|null} [resultCount] SearchDetails resultCount
                         * @property {string|null} [query] SearchDetails query
                         * @property {number|null} [resultPage] SearchDetails resultPage
                         * @property {number|null} [resultPageSize] SearchDetails resultPageSize
                         * @property {number|null} [resultTotalPage] SearchDetails resultTotalPage
                         * @property {string|null} [filter] SearchDetails filter
                         * @property {string|null} [sort] SearchDetails sort
                         * @property {string|null} [tags] SearchDetails tags
                         */

                        /**
                         * Constructs a new SearchDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents a SearchDetails.
                         * @implements ISearchDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.ISearchDetails=} [properties] Properties to set
                         */
                        function SearchDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * SearchDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * SearchDetails item.
                         * @member {string} item
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.item = ''

                        /**
                         * SearchDetails type.
                         * @member {string} type
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.type = ''

                        /**
                         * SearchDetails result.
                         * @member {string} result
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.result = ''

                        /**
                         * SearchDetails resultCount.
                         * @member {number} resultCount
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.resultCount = 0

                        /**
                         * SearchDetails query.
                         * @member {string} query
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.query = ''

                        /**
                         * SearchDetails resultPage.
                         * @member {number} resultPage
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.resultPage = 0

                        /**
                         * SearchDetails resultPageSize.
                         * @member {number} resultPageSize
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.resultPageSize = 0

                        /**
                         * SearchDetails resultTotalPage.
                         * @member {number} resultTotalPage
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.resultTotalPage = 0

                        /**
                         * SearchDetails filter.
                         * @member {string} filter
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.filter = ''

                        /**
                         * SearchDetails sort.
                         * @member {string} sort
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.sort = ''

                        /**
                         * SearchDetails tags.
                         * @member {string} tags
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @instance
                         */
                        SearchDetails.prototype.tags = ''

                        /**
                         * Creates a new SearchDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.ISearchDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.SearchDetails} SearchDetails instance
                         */
                        SearchDetails.create = function create(properties) {
                            return new SearchDetails(properties)
                        }

                        /**
                         * Encodes the specified SearchDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.SearchDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.ISearchDetails} message SearchDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SearchDetails.encode = function encode(
                            message,
                            writer
                        ) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.item != null &&
                                Object.hasOwnProperty.call(message, 'item')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.item)
                            if (
                                message.type != null &&
                                Object.hasOwnProperty.call(message, 'type')
                            )
                                writer
                                    .uint32(/* id 3, wireType 2 =*/ 26)
                                    .string(message.type)
                            if (
                                message.result != null &&
                                Object.hasOwnProperty.call(message, 'result')
                            )
                                writer
                                    .uint32(/* id 4, wireType 2 =*/ 34)
                                    .string(message.result)
                            if (
                                message.resultCount != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'resultCount'
                                )
                            )
                                writer
                                    .uint32(/* id 5, wireType 0 =*/ 40)
                                    .int32(message.resultCount)
                            if (
                                message.query != null &&
                                Object.hasOwnProperty.call(message, 'query')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.query)
                            if (
                                message.resultPage != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'resultPage'
                                )
                            )
                                writer
                                    .uint32(/* id 7, wireType 0 =*/ 56)
                                    .int32(message.resultPage)
                            if (
                                message.resultPageSize != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'resultPageSize'
                                )
                            )
                                writer
                                    .uint32(/* id 8, wireType 0 =*/ 64)
                                    .int32(message.resultPageSize)
                            if (
                                message.resultTotalPage != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'resultTotalPage'
                                )
                            )
                                writer
                                    .uint32(/* id 9, wireType 0 =*/ 72)
                                    .int32(message.resultTotalPage)
                            if (
                                message.filter != null &&
                                Object.hasOwnProperty.call(message, 'filter')
                            )
                                writer
                                    .uint32(/* id 10, wireType 2 =*/ 82)
                                    .string(message.filter)
                            if (
                                message.sort != null &&
                                Object.hasOwnProperty.call(message, 'sort')
                            )
                                writer
                                    .uint32(/* id 11, wireType 2 =*/ 90)
                                    .string(message.sort)
                            if (
                                message.tags != null &&
                                Object.hasOwnProperty.call(message, 'tags')
                            )
                                writer
                                    .uint32(/* id 12, wireType 2 =*/ 98)
                                    .string(message.tags)
                            return writer
                        }

                        /**
                         * Decodes a SearchDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.SearchDetails} SearchDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SearchDetails.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.SearchDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.item = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.type = reader.string()
                                        break
                                    }
                                    case 4: {
                                        message.result = reader.string()
                                        break
                                    }
                                    case 5: {
                                        message.resultCount = reader.int32()
                                        break
                                    }
                                    case 6: {
                                        message.query = reader.string()
                                        break
                                    }
                                    case 7: {
                                        message.resultPage = reader.int32()
                                        break
                                    }
                                    case 8: {
                                        message.resultPageSize = reader.int32()
                                        break
                                    }
                                    case 9: {
                                        message.resultTotalPage = reader.int32()
                                        break
                                    }
                                    case 10: {
                                        message.filter = reader.string()
                                        break
                                    }
                                    case 11: {
                                        message.sort = reader.string()
                                        break
                                    }
                                    case 12: {
                                        message.tags = reader.string()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies a SearchDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SearchDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.item != null &&
                                message.hasOwnProperty('item')
                            )
                                if (!$util.isString(message.item))
                                    return 'item: string expected'
                            if (
                                message.type != null &&
                                message.hasOwnProperty('type')
                            )
                                if (!$util.isString(message.type))
                                    return 'type: string expected'
                            if (
                                message.result != null &&
                                message.hasOwnProperty('result')
                            )
                                if (!$util.isString(message.result))
                                    return 'result: string expected'
                            if (
                                message.resultCount != null &&
                                message.hasOwnProperty('resultCount')
                            )
                                if (!$util.isInteger(message.resultCount))
                                    return 'resultCount: integer expected'
                            if (
                                message.query != null &&
                                message.hasOwnProperty('query')
                            )
                                if (!$util.isString(message.query))
                                    return 'query: string expected'
                            if (
                                message.resultPage != null &&
                                message.hasOwnProperty('resultPage')
                            )
                                if (!$util.isInteger(message.resultPage))
                                    return 'resultPage: integer expected'
                            if (
                                message.resultPageSize != null &&
                                message.hasOwnProperty('resultPageSize')
                            )
                                if (!$util.isInteger(message.resultPageSize))
                                    return 'resultPageSize: integer expected'
                            if (
                                message.resultTotalPage != null &&
                                message.hasOwnProperty('resultTotalPage')
                            )
                                if (!$util.isInteger(message.resultTotalPage))
                                    return 'resultTotalPage: integer expected'
                            if (
                                message.filter != null &&
                                message.hasOwnProperty('filter')
                            )
                                if (!$util.isString(message.filter))
                                    return 'filter: string expected'
                            if (
                                message.sort != null &&
                                message.hasOwnProperty('sort')
                            )
                                if (!$util.isString(message.sort))
                                    return 'sort: string expected'
                            if (
                                message.tags != null &&
                                message.hasOwnProperty('tags')
                            )
                                if (!$util.isString(message.tags))
                                    return 'tags: string expected'
                            return null
                        }

                        /**
                         * Gets the default type url for SearchDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.SearchDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SearchDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.SearchDetails'
                            )
                        }

                        return SearchDetails
                    })()

                    common.StrategyDetails = (function () {
                        /**
                         * Properties of a StrategyDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface IStrategyDetails
                         * @property {number|Long|null} [id] StrategyDetails id
                         * @property {string|null} [name] StrategyDetails name
                         * @property {number|null} [nodeCount] StrategyDetails nodeCount
                         * @property {number|null} [edgeCount] StrategyDetails edgeCount
                         * @property {number|null} [flowchartId] StrategyDetails flowchartId
                         * @property {string|null} [state] StrategyDetails state
                         * @property {string|null} [created] StrategyDetails created
                         * @property {string|null} [updated] StrategyDetails updated
                         * @property {number|null} [currentErrorCount] StrategyDetails currentErrorCount
                         * @property {number|Long|null} [errorNodeId] StrategyDetails errorNodeId
                         * @property {string|null} [errors] StrategyDetails errors
                         * @property {boolean|null} [readyToTest] StrategyDetails readyToTest
                         * @property {boolean|null} [readyToDeploy] StrategyDetails readyToDeploy
                         */

                        /**
                         * Constructs a new StrategyDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents a StrategyDetails.
                         * @implements IStrategyDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.IStrategyDetails=} [properties] Properties to set
                         */
                        function StrategyDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * StrategyDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * StrategyDetails name.
                         * @member {string} name
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.name = ''

                        /**
                         * StrategyDetails nodeCount.
                         * @member {number} nodeCount
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.nodeCount = 0

                        /**
                         * StrategyDetails edgeCount.
                         * @member {number} edgeCount
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.edgeCount = 0

                        /**
                         * StrategyDetails flowchartId.
                         * @member {number} flowchartId
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.flowchartId = 0

                        /**
                         * StrategyDetails state.
                         * @member {string} state
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.state = ''

                        /**
                         * StrategyDetails created.
                         * @member {string} created
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.created = ''

                        /**
                         * StrategyDetails updated.
                         * @member {string} updated
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.updated = ''

                        /**
                         * StrategyDetails currentErrorCount.
                         * @member {number} currentErrorCount
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.currentErrorCount = 0

                        /**
                         * StrategyDetails errorNodeId.
                         * @member {number|Long} errorNodeId
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.errorNodeId = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * StrategyDetails errors.
                         * @member {string} errors
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.errors = ''

                        /**
                         * StrategyDetails readyToTest.
                         * @member {boolean} readyToTest
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.readyToTest = false

                        /**
                         * StrategyDetails readyToDeploy.
                         * @member {boolean} readyToDeploy
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @instance
                         */
                        StrategyDetails.prototype.readyToDeploy = false

                        /**
                         * Creates a new StrategyDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IStrategyDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.StrategyDetails} StrategyDetails instance
                         */
                        StrategyDetails.create = function create(properties) {
                            return new StrategyDetails(properties)
                        }

                        /**
                         * Encodes the specified StrategyDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.StrategyDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IStrategyDetails} message StrategyDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StrategyDetails.encode = function encode(
                            message,
                            writer
                        ) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.name != null &&
                                Object.hasOwnProperty.call(message, 'name')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.name)
                            if (
                                message.nodeCount != null &&
                                Object.hasOwnProperty.call(message, 'nodeCount')
                            )
                                writer
                                    .uint32(/* id 3, wireType 0 =*/ 24)
                                    .int32(message.nodeCount)
                            if (
                                message.edgeCount != null &&
                                Object.hasOwnProperty.call(message, 'edgeCount')
                            )
                                writer
                                    .uint32(/* id 4, wireType 0 =*/ 32)
                                    .int32(message.edgeCount)
                            if (
                                message.flowchartId != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'flowchartId'
                                )
                            )
                                writer
                                    .uint32(/* id 5, wireType 0 =*/ 40)
                                    .int32(message.flowchartId)
                            if (
                                message.state != null &&
                                Object.hasOwnProperty.call(message, 'state')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.state)
                            if (
                                message.created != null &&
                                Object.hasOwnProperty.call(message, 'created')
                            )
                                writer
                                    .uint32(/* id 7, wireType 2 =*/ 58)
                                    .string(message.created)
                            if (
                                message.updated != null &&
                                Object.hasOwnProperty.call(message, 'updated')
                            )
                                writer
                                    .uint32(/* id 8, wireType 2 =*/ 66)
                                    .string(message.updated)
                            if (
                                message.currentErrorCount != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'currentErrorCount'
                                )
                            )
                                writer
                                    .uint32(/* id 9, wireType 0 =*/ 72)
                                    .int32(message.currentErrorCount)
                            if (
                                message.errorNodeId != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'errorNodeId'
                                )
                            )
                                writer
                                    .uint32(/* id 10, wireType 0 =*/ 80)
                                    .int64(message.errorNodeId)
                            if (
                                message.errors != null &&
                                Object.hasOwnProperty.call(message, 'errors')
                            )
                                writer
                                    .uint32(/* id 11, wireType 2 =*/ 90)
                                    .string(message.errors)
                            if (
                                message.readyToTest != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'readyToTest'
                                )
                            )
                                writer
                                    .uint32(/* id 12, wireType 0 =*/ 96)
                                    .bool(message.readyToTest)
                            if (
                                message.readyToDeploy != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'readyToDeploy'
                                )
                            )
                                writer
                                    .uint32(/* id 13, wireType 0 =*/ 104)
                                    .bool(message.readyToDeploy)
                            return writer
                        }

                        /**
                         * Decodes a StrategyDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.StrategyDetails} StrategyDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StrategyDetails.decode = function decode(
                            reader,
                            length
                        ) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.StrategyDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.name = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.nodeCount = reader.int32()
                                        break
                                    }
                                    case 4: {
                                        message.edgeCount = reader.int32()
                                        break
                                    }
                                    case 5: {
                                        message.flowchartId = reader.int32()
                                        break
                                    }
                                    case 6: {
                                        message.state = reader.string()
                                        break
                                    }
                                    case 7: {
                                        message.created = reader.string()
                                        break
                                    }
                                    case 8: {
                                        message.updated = reader.string()
                                        break
                                    }
                                    case 9: {
                                        message.currentErrorCount = reader.int32()
                                        break
                                    }
                                    case 10: {
                                        message.errorNodeId = reader.int64()
                                        break
                                    }
                                    case 11: {
                                        message.errors = reader.string()
                                        break
                                    }
                                    case 12: {
                                        message.readyToTest = reader.bool()
                                        break
                                    }
                                    case 13: {
                                        message.readyToDeploy = reader.bool()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies a StrategyDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StrategyDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.name != null &&
                                message.hasOwnProperty('name')
                            )
                                if (!$util.isString(message.name))
                                    return 'name: string expected'
                            if (
                                message.nodeCount != null &&
                                message.hasOwnProperty('nodeCount')
                            )
                                if (!$util.isInteger(message.nodeCount))
                                    return 'nodeCount: integer expected'
                            if (
                                message.edgeCount != null &&
                                message.hasOwnProperty('edgeCount')
                            )
                                if (!$util.isInteger(message.edgeCount))
                                    return 'edgeCount: integer expected'
                            if (
                                message.flowchartId != null &&
                                message.hasOwnProperty('flowchartId')
                            )
                                if (!$util.isInteger(message.flowchartId))
                                    return 'flowchartId: integer expected'
                            if (
                                message.state != null &&
                                message.hasOwnProperty('state')
                            )
                                if (!$util.isString(message.state))
                                    return 'state: string expected'
                            if (
                                message.created != null &&
                                message.hasOwnProperty('created')
                            )
                                if (!$util.isString(message.created))
                                    return 'created: string expected'
                            if (
                                message.updated != null &&
                                message.hasOwnProperty('updated')
                            )
                                if (!$util.isString(message.updated))
                                    return 'updated: string expected'
                            if (
                                message.currentErrorCount != null &&
                                message.hasOwnProperty('currentErrorCount')
                            )
                                if (!$util.isInteger(message.currentErrorCount))
                                    return 'currentErrorCount: integer expected'
                            if (
                                message.errorNodeId != null &&
                                message.hasOwnProperty('errorNodeId')
                            )
                                if (
                                    !$util.isInteger(message.errorNodeId) &&
                                    !(
                                        message.errorNodeId &&
                                        $util.isInteger(
                                            message.errorNodeId.low
                                        ) &&
                                        $util.isInteger(
                                            message.errorNodeId.high
                                        )
                                    )
                                )
                                    return 'errorNodeId: integer|Long expected'
                            if (
                                message.errors != null &&
                                message.hasOwnProperty('errors')
                            )
                                if (!$util.isString(message.errors))
                                    return 'errors: string expected'
                            if (
                                message.readyToTest != null &&
                                message.hasOwnProperty('readyToTest')
                            )
                                if (typeof message.readyToTest !== 'boolean')
                                    return 'readyToTest: boolean expected'
                            if (
                                message.readyToDeploy != null &&
                                message.hasOwnProperty('readyToDeploy')
                            )
                                if (typeof message.readyToDeploy !== 'boolean')
                                    return 'readyToDeploy: boolean expected'
                            return null
                        }

                        /**
                         * Gets the default type url for StrategyDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.StrategyDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        StrategyDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.StrategyDetails'
                            )
                        }

                        return StrategyDetails
                    })()

                    common.CreateDetails = (function () {
                        /**
                         * Properties of a CreateDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface ICreateDetails
                         * @property {number|Long|null} [id] CreateDetails id
                         * @property {string|null} [item] CreateDetails item
                         * @property {string|null} [type] CreateDetails type
                         * @property {string|null} [order] CreateDetails order
                         * @property {string|null} [label] CreateDetails label
                         * @property {string|null} [message] CreateDetails message
                         * @property {string|null} [response] CreateDetails response
                         */

                        /**
                         * Constructs a new CreateDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents a CreateDetails.
                         * @implements ICreateDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.ICreateDetails=} [properties] Properties to set
                         */
                        function CreateDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * CreateDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * CreateDetails item.
                         * @member {string} item
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.item = ''

                        /**
                         * CreateDetails type.
                         * @member {string} type
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.type = ''

                        /**
                         * CreateDetails order.
                         * @member {string} order
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.order = ''

                        /**
                         * CreateDetails label.
                         * @member {string} label
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.label = ''

                        /**
                         * CreateDetails message.
                         * @member {string} message
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.message = ''

                        /**
                         * CreateDetails response.
                         * @member {string} response
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @instance
                         */
                        CreateDetails.prototype.response = ''

                        /**
                         * Creates a new CreateDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.ICreateDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.CreateDetails} CreateDetails instance
                         */
                        CreateDetails.create = function create(properties) {
                            return new CreateDetails(properties)
                        }

                        /**
                         * Encodes the specified CreateDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.CreateDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.ICreateDetails} message CreateDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateDetails.encode = function encode(
                            message,
                            writer
                        ) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.item != null &&
                                Object.hasOwnProperty.call(message, 'item')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.item)
                            if (
                                message.type != null &&
                                Object.hasOwnProperty.call(message, 'type')
                            )
                                writer
                                    .uint32(/* id 3, wireType 2 =*/ 26)
                                    .string(message.type)
                            if (
                                message.order != null &&
                                Object.hasOwnProperty.call(message, 'order')
                            )
                                writer
                                    .uint32(/* id 4, wireType 2 =*/ 34)
                                    .string(message.order)
                            if (
                                message.label != null &&
                                Object.hasOwnProperty.call(message, 'label')
                            )
                                writer
                                    .uint32(/* id 5, wireType 2 =*/ 42)
                                    .string(message.label)
                            if (
                                message.message != null &&
                                Object.hasOwnProperty.call(message, 'message')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.message)
                            if (
                                message.response != null &&
                                Object.hasOwnProperty.call(message, 'response')
                            )
                                writer
                                    .uint32(/* id 7, wireType 2 =*/ 58)
                                    .string(message.response)
                            return writer
                        }

                        /**
                         * Decodes a CreateDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.CreateDetails} CreateDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateDetails.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.CreateDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.item = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.type = reader.string()
                                        break
                                    }
                                    case 4: {
                                        message.order = reader.string()
                                        break
                                    }
                                    case 5: {
                                        message.label = reader.string()
                                        break
                                    }
                                    case 6: {
                                        message.message = reader.string()
                                        break
                                    }
                                    case 7: {
                                        message.response = reader.string()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies a CreateDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CreateDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.item != null &&
                                message.hasOwnProperty('item')
                            )
                                if (!$util.isString(message.item))
                                    return 'item: string expected'
                            if (
                                message.type != null &&
                                message.hasOwnProperty('type')
                            )
                                if (!$util.isString(message.type))
                                    return 'type: string expected'
                            if (
                                message.order != null &&
                                message.hasOwnProperty('order')
                            )
                                if (!$util.isString(message.order))
                                    return 'order: string expected'
                            if (
                                message.label != null &&
                                message.hasOwnProperty('label')
                            )
                                if (!$util.isString(message.label))
                                    return 'label: string expected'
                            if (
                                message.message != null &&
                                message.hasOwnProperty('message')
                            )
                                if (!$util.isString(message.message))
                                    return 'message: string expected'
                            if (
                                message.response != null &&
                                message.hasOwnProperty('response')
                            )
                                if (!$util.isString(message.response))
                                    return 'response: string expected'
                            return null
                        }

                        /**
                         * Gets the default type url for CreateDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.CreateDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CreateDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.CreateDetails'
                            )
                        }

                        return CreateDetails
                    })()

                    common.ReadDetails = (function () {
                        /**
                         * Properties of a ReadDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface IReadDetails
                         * @property {number|Long|null} [id] ReadDetails id
                         * @property {string|null} [item] ReadDetails item
                         * @property {string|null} [type] ReadDetails type
                         * @property {string|null} [order] ReadDetails order
                         * @property {string|null} [label] ReadDetails label
                         * @property {string|null} [message] ReadDetails message
                         * @property {string|null} [response] ReadDetails response
                         */

                        /**
                         * Constructs a new ReadDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents a ReadDetails.
                         * @implements IReadDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.IReadDetails=} [properties] Properties to set
                         */
                        function ReadDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * ReadDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * ReadDetails item.
                         * @member {string} item
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.item = ''

                        /**
                         * ReadDetails type.
                         * @member {string} type
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.type = ''

                        /**
                         * ReadDetails order.
                         * @member {string} order
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.order = ''

                        /**
                         * ReadDetails label.
                         * @member {string} label
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.label = ''

                        /**
                         * ReadDetails message.
                         * @member {string} message
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.message = ''

                        /**
                         * ReadDetails response.
                         * @member {string} response
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @instance
                         */
                        ReadDetails.prototype.response = ''

                        /**
                         * Creates a new ReadDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IReadDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.ReadDetails} ReadDetails instance
                         */
                        ReadDetails.create = function create(properties) {
                            return new ReadDetails(properties)
                        }

                        /**
                         * Encodes the specified ReadDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.ReadDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IReadDetails} message ReadDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReadDetails.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.item != null &&
                                Object.hasOwnProperty.call(message, 'item')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.item)
                            if (
                                message.type != null &&
                                Object.hasOwnProperty.call(message, 'type')
                            )
                                writer
                                    .uint32(/* id 3, wireType 2 =*/ 26)
                                    .string(message.type)
                            if (
                                message.order != null &&
                                Object.hasOwnProperty.call(message, 'order')
                            )
                                writer
                                    .uint32(/* id 4, wireType 2 =*/ 34)
                                    .string(message.order)
                            if (
                                message.label != null &&
                                Object.hasOwnProperty.call(message, 'label')
                            )
                                writer
                                    .uint32(/* id 5, wireType 2 =*/ 42)
                                    .string(message.label)
                            if (
                                message.message != null &&
                                Object.hasOwnProperty.call(message, 'message')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.message)
                            if (
                                message.response != null &&
                                Object.hasOwnProperty.call(message, 'response')
                            )
                                writer
                                    .uint32(/* id 7, wireType 2 =*/ 58)
                                    .string(message.response)
                            return writer
                        }

                        /**
                         * Decodes a ReadDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.ReadDetails} ReadDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReadDetails.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.ReadDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.item = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.type = reader.string()
                                        break
                                    }
                                    case 4: {
                                        message.order = reader.string()
                                        break
                                    }
                                    case 5: {
                                        message.label = reader.string()
                                        break
                                    }
                                    case 6: {
                                        message.message = reader.string()
                                        break
                                    }
                                    case 7: {
                                        message.response = reader.string()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies a ReadDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReadDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.item != null &&
                                message.hasOwnProperty('item')
                            )
                                if (!$util.isString(message.item))
                                    return 'item: string expected'
                            if (
                                message.type != null &&
                                message.hasOwnProperty('type')
                            )
                                if (!$util.isString(message.type))
                                    return 'type: string expected'
                            if (
                                message.order != null &&
                                message.hasOwnProperty('order')
                            )
                                if (!$util.isString(message.order))
                                    return 'order: string expected'
                            if (
                                message.label != null &&
                                message.hasOwnProperty('label')
                            )
                                if (!$util.isString(message.label))
                                    return 'label: string expected'
                            if (
                                message.message != null &&
                                message.hasOwnProperty('message')
                            )
                                if (!$util.isString(message.message))
                                    return 'message: string expected'
                            if (
                                message.response != null &&
                                message.hasOwnProperty('response')
                            )
                                if (!$util.isString(message.response))
                                    return 'response: string expected'
                            return null
                        }

                        /**
                         * Gets the default type url for ReadDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.ReadDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ReadDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.ReadDetails'
                            )
                        }

                        return ReadDetails
                    })()

                    common.StepDetails = (function () {
                        /**
                         * Properties of a StepDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @interface IStepDetails
                         * @property {number|Long|null} [id] StepDetails id
                         * @property {string|null} [name] StepDetails name
                         * @property {string|null} [issueConfigs] StepDetails issueConfigs
                         * @property {string|null} [generationConfigs] StepDetails generationConfigs
                         * @property {string|null} [sampleContext] StepDetails sampleContext
                         * @property {string|null} [context] StepDetails context
                         * @property {string|null} [ticketDataRequired] StepDetails ticketDataRequired
                         * @property {string|null} [otherDataRequired] StepDetails otherDataRequired
                         * @property {string|null} [errors] StepDetails errors
                         */

                        /**
                         * Constructs a new StepDetails.
                         * @memberof web.gojek.clickstream.products.common
                         * @classdesc Represents a StepDetails.
                         * @implements IStepDetails
                         * @constructor
                         * @param {web.gojek.clickstream.products.common.IStepDetails=} [properties] Properties to set
                         */
                        function StepDetails(properties) {
                            if (properties)
                                for (
                                    let keys = Object.keys(properties), i = 0;
                                    i < keys.length;
                                    ++i
                                )
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]]
                        }

                        /**
                         * StepDetails id.
                         * @member {number|Long} id
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.id = $util.Long
                            ? $util.Long.fromBits(0, 0, false)
                            : 0

                        /**
                         * StepDetails name.
                         * @member {string} name
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.name = ''

                        /**
                         * StepDetails issueConfigs.
                         * @member {string} issueConfigs
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.issueConfigs = ''

                        /**
                         * StepDetails generationConfigs.
                         * @member {string} generationConfigs
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.generationConfigs = ''

                        /**
                         * StepDetails sampleContext.
                         * @member {string} sampleContext
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.sampleContext = ''

                        /**
                         * StepDetails context.
                         * @member {string} context
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.context = ''

                        /**
                         * StepDetails ticketDataRequired.
                         * @member {string} ticketDataRequired
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.ticketDataRequired = ''

                        /**
                         * StepDetails otherDataRequired.
                         * @member {string} otherDataRequired
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.otherDataRequired = ''

                        /**
                         * StepDetails errors.
                         * @member {string} errors
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @instance
                         */
                        StepDetails.prototype.errors = ''

                        /**
                         * Creates a new StepDetails instance using the specified properties.
                         * @function create
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IStepDetails=} [properties] Properties to set
                         * @returns {web.gojek.clickstream.products.common.StepDetails} StepDetails instance
                         */
                        StepDetails.create = function create(properties) {
                            return new StepDetails(properties)
                        }

                        /**
                         * Encodes the specified StepDetails message. Does not implicitly {@link web.gojek.clickstream.products.common.StepDetails.verify|verify} messages.
                         * @function encode
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @static
                         * @param {web.gojek.clickstream.products.common.IStepDetails} message StepDetails message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StepDetails.encode = function encode(message, writer) {
                            if (!writer) writer = $Writer.create()
                            if (
                                message.id != null &&
                                Object.hasOwnProperty.call(message, 'id')
                            )
                                writer
                                    .uint32(/* id 1, wireType 0 =*/ 8)
                                    .int64(message.id)
                            if (
                                message.name != null &&
                                Object.hasOwnProperty.call(message, 'name')
                            )
                                writer
                                    .uint32(/* id 2, wireType 2 =*/ 18)
                                    .string(message.name)
                            if (
                                message.issueConfigs != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'issueConfigs'
                                )
                            )
                                writer
                                    .uint32(/* id 3, wireType 2 =*/ 26)
                                    .string(message.issueConfigs)
                            if (
                                message.generationConfigs != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'generationConfigs'
                                )
                            )
                                writer
                                    .uint32(/* id 4, wireType 2 =*/ 34)
                                    .string(message.generationConfigs)
                            if (
                                message.sampleContext != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'sampleContext'
                                )
                            )
                                writer
                                    .uint32(/* id 5, wireType 2 =*/ 42)
                                    .string(message.sampleContext)
                            if (
                                message.context != null &&
                                Object.hasOwnProperty.call(message, 'context')
                            )
                                writer
                                    .uint32(/* id 6, wireType 2 =*/ 50)
                                    .string(message.context)
                            if (
                                message.ticketDataRequired != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'ticketDataRequired'
                                )
                            )
                                writer
                                    .uint32(/* id 7, wireType 2 =*/ 58)
                                    .string(message.ticketDataRequired)
                            if (
                                message.otherDataRequired != null &&
                                Object.hasOwnProperty.call(
                                    message,
                                    'otherDataRequired'
                                )
                            )
                                writer
                                    .uint32(/* id 8, wireType 2 =*/ 66)
                                    .string(message.otherDataRequired)
                            if (
                                message.errors != null &&
                                Object.hasOwnProperty.call(message, 'errors')
                            )
                                writer
                                    .uint32(/* id 9, wireType 2 =*/ 74)
                                    .string(message.errors)
                            return writer
                        }

                        /**
                         * Decodes a StepDetails message from the specified reader or buffer.
                         * @function decode
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {web.gojek.clickstream.products.common.StepDetails} StepDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StepDetails.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader)
                            let end =
                                    length === undefined
                                        ? reader.len
                                        : reader.pos + length,
                                message = new $root.web.gojek.clickstream.products.common.StepDetails()
                            while (reader.pos < end) {
                                let tag = reader.uint32()
                                switch (tag >>> 3) {
                                    case 1: {
                                        message.id = reader.int64()
                                        break
                                    }
                                    case 2: {
                                        message.name = reader.string()
                                        break
                                    }
                                    case 3: {
                                        message.issueConfigs = reader.string()
                                        break
                                    }
                                    case 4: {
                                        message.generationConfigs = reader.string()
                                        break
                                    }
                                    case 5: {
                                        message.sampleContext = reader.string()
                                        break
                                    }
                                    case 6: {
                                        message.context = reader.string()
                                        break
                                    }
                                    case 7: {
                                        message.ticketDataRequired = reader.string()
                                        break
                                    }
                                    case 8: {
                                        message.otherDataRequired = reader.string()
                                        break
                                    }
                                    case 9: {
                                        message.errors = reader.string()
                                        break
                                    }
                                    default:
                                        reader.skipType(tag & 7)
                                        break
                                }
                            }
                            return message
                        }

                        /**
                         * Verifies a StepDetails message.
                         * @function verify
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StepDetails.verify = function verify(message) {
                            if (typeof message !== 'object' || message === null)
                                return 'object expected'
                            if (
                                message.id != null &&
                                message.hasOwnProperty('id')
                            )
                                if (
                                    !$util.isInteger(message.id) &&
                                    !(
                                        message.id &&
                                        $util.isInteger(message.id.low) &&
                                        $util.isInteger(message.id.high)
                                    )
                                )
                                    return 'id: integer|Long expected'
                            if (
                                message.name != null &&
                                message.hasOwnProperty('name')
                            )
                                if (!$util.isString(message.name))
                                    return 'name: string expected'
                            if (
                                message.issueConfigs != null &&
                                message.hasOwnProperty('issueConfigs')
                            )
                                if (!$util.isString(message.issueConfigs))
                                    return 'issueConfigs: string expected'
                            if (
                                message.generationConfigs != null &&
                                message.hasOwnProperty('generationConfigs')
                            )
                                if (!$util.isString(message.generationConfigs))
                                    return 'generationConfigs: string expected'
                            if (
                                message.sampleContext != null &&
                                message.hasOwnProperty('sampleContext')
                            )
                                if (!$util.isString(message.sampleContext))
                                    return 'sampleContext: string expected'
                            if (
                                message.context != null &&
                                message.hasOwnProperty('context')
                            )
                                if (!$util.isString(message.context))
                                    return 'context: string expected'
                            if (
                                message.ticketDataRequired != null &&
                                message.hasOwnProperty('ticketDataRequired')
                            )
                                if (!$util.isString(message.ticketDataRequired))
                                    return 'ticketDataRequired: string expected'
                            if (
                                message.otherDataRequired != null &&
                                message.hasOwnProperty('otherDataRequired')
                            )
                                if (!$util.isString(message.otherDataRequired))
                                    return 'otherDataRequired: string expected'
                            if (
                                message.errors != null &&
                                message.hasOwnProperty('errors')
                            )
                                if (!$util.isString(message.errors))
                                    return 'errors: string expected'
                            return null
                        }

                        /**
                         * Gets the default type url for StepDetails
                         * @function getTypeUrl
                         * @memberof web.gojek.clickstream.products.common.StepDetails
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        StepDetails.getTypeUrl = function getTypeUrl(
                            typeUrlPrefix
                        ) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = 'type.googleapis.com'
                            }
                            return (
                                typeUrlPrefix +
                                '/web.gojek.clickstream.products.common.StepDetails'
                            )
                        }

                        return StepDetails
                    })()

                    return common
                })()

                return products
            })()

            clickstream.meta = (function () {
                /**
                 * Namespace meta.
                 * @memberof web.gojek.clickstream
                 * @namespace
                 */
                const meta = {}

                meta.EventMeta = (function () {
                    /**
                     * Properties of an EventMeta.
                     * @memberof web.gojek.clickstream.meta
                     * @interface IEventMeta
                     * @property {string|null} [eventGuid] EventMeta eventGuid
                     * @property {web.gojek.clickstream.meta.IUser|null} [user] EventMeta user
                     */

                    /**
                     * Constructs a new EventMeta.
                     * @memberof web.gojek.clickstream.meta
                     * @classdesc Represents an EventMeta.
                     * @implements IEventMeta
                     * @constructor
                     * @param {web.gojek.clickstream.meta.IEventMeta=} [properties] Properties to set
                     */
                    function EventMeta(properties) {
                        if (properties)
                            for (
                                let keys = Object.keys(properties), i = 0;
                                i < keys.length;
                                ++i
                            )
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]]
                    }

                    /**
                     * EventMeta eventGuid.
                     * @member {string} eventGuid
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @instance
                     */
                    EventMeta.prototype.eventGuid = ''

                    /**
                     * EventMeta user.
                     * @member {web.gojek.clickstream.meta.IUser|null|undefined} user
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @instance
                     */
                    EventMeta.prototype.user = null

                    /**
                     * Creates a new EventMeta instance using the specified properties.
                     * @function create
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @static
                     * @param {web.gojek.clickstream.meta.IEventMeta=} [properties] Properties to set
                     * @returns {web.gojek.clickstream.meta.EventMeta} EventMeta instance
                     */
                    EventMeta.create = function create(properties) {
                        return new EventMeta(properties)
                    }

                    /**
                     * Encodes the specified EventMeta message. Does not implicitly {@link web.gojek.clickstream.meta.EventMeta.verify|verify} messages.
                     * @function encode
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @static
                     * @param {web.gojek.clickstream.meta.IEventMeta} message EventMeta message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EventMeta.encode = function encode(message, writer) {
                        if (!writer) writer = $Writer.create()
                        if (
                            message.eventGuid != null &&
                            Object.hasOwnProperty.call(message, 'eventGuid')
                        )
                            writer
                                .uint32(/* id 1, wireType 2 =*/ 10)
                                .string(message.eventGuid)
                        if (
                            message.user != null &&
                            Object.hasOwnProperty.call(message, 'user')
                        )
                            $root.web.gojek.clickstream.meta.User.encode(
                                message.user,
                                writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
                            ).ldelim()
                        return writer
                    }

                    /**
                     * Decodes an EventMeta message from the specified reader or buffer.
                     * @function decode
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {web.gojek.clickstream.meta.EventMeta} EventMeta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EventMeta.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader)
                        let end =
                                length === undefined
                                    ? reader.len
                                    : reader.pos + length,
                            message = new $root.web.gojek.clickstream.meta.EventMeta()
                        while (reader.pos < end) {
                            let tag = reader.uint32()
                            switch (tag >>> 3) {
                                case 1: {
                                    message.eventGuid = reader.string()
                                    break
                                }
                                case 2: {
                                    message.user = $root.web.gojek.clickstream.meta.User.decode(
                                        reader,
                                        reader.uint32()
                                    )
                                    break
                                }
                                default:
                                    reader.skipType(tag & 7)
                                    break
                            }
                        }
                        return message
                    }

                    /**
                     * Verifies an EventMeta message.
                     * @function verify
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EventMeta.verify = function verify(message) {
                        if (typeof message !== 'object' || message === null)
                            return 'object expected'
                        if (
                            message.eventGuid != null &&
                            message.hasOwnProperty('eventGuid')
                        )
                            if (!$util.isString(message.eventGuid))
                                return 'eventGuid: string expected'
                        if (
                            message.user != null &&
                            message.hasOwnProperty('user')
                        ) {
                            let error = $root.web.gojek.clickstream.meta.User.verify(
                                message.user
                            )
                            if (error) return 'user.' + error
                        }
                        return null
                    }

                    /**
                     * Gets the default type url for EventMeta
                     * @function getTypeUrl
                     * @memberof web.gojek.clickstream.meta.EventMeta
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    EventMeta.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = 'type.googleapis.com'
                        }
                        return (
                            typeUrlPrefix +
                            '/web.gojek.clickstream.meta.EventMeta'
                        )
                    }

                    return EventMeta
                })()

                meta.User = (function () {
                    /**
                     * Properties of a User.
                     * @memberof web.gojek.clickstream.meta
                     * @interface IUser
                     * @property {number|Long|null} [id] User id
                     * @property {string|null} [name] User name
                     * @property {string|null} [email] User email
                     * @property {string|null} [imageUrl] User imageUrl
                     */

                    /**
                     * Constructs a new User.
                     * @memberof web.gojek.clickstream.meta
                     * @classdesc Represents a User.
                     * @implements IUser
                     * @constructor
                     * @param {web.gojek.clickstream.meta.IUser=} [properties] Properties to set
                     */
                    function User(properties) {
                        if (properties)
                            for (
                                let keys = Object.keys(properties), i = 0;
                                i < keys.length;
                                ++i
                            )
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]]
                    }

                    /**
                     * User id.
                     * @member {number|Long} id
                     * @memberof web.gojek.clickstream.meta.User
                     * @instance
                     */
                    User.prototype.id = $util.Long
                        ? $util.Long.fromBits(0, 0, false)
                        : 0

                    /**
                     * User name.
                     * @member {string} name
                     * @memberof web.gojek.clickstream.meta.User
                     * @instance
                     */
                    User.prototype.name = ''

                    /**
                     * User email.
                     * @member {string} email
                     * @memberof web.gojek.clickstream.meta.User
                     * @instance
                     */
                    User.prototype.email = ''

                    /**
                     * User imageUrl.
                     * @member {string} imageUrl
                     * @memberof web.gojek.clickstream.meta.User
                     * @instance
                     */
                    User.prototype.imageUrl = ''

                    /**
                     * Creates a new User instance using the specified properties.
                     * @function create
                     * @memberof web.gojek.clickstream.meta.User
                     * @static
                     * @param {web.gojek.clickstream.meta.IUser=} [properties] Properties to set
                     * @returns {web.gojek.clickstream.meta.User} User instance
                     */
                    User.create = function create(properties) {
                        return new User(properties)
                    }

                    /**
                     * Encodes the specified User message. Does not implicitly {@link web.gojek.clickstream.meta.User.verify|verify} messages.
                     * @function encode
                     * @memberof web.gojek.clickstream.meta.User
                     * @static
                     * @param {web.gojek.clickstream.meta.IUser} message User message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    User.encode = function encode(message, writer) {
                        if (!writer) writer = $Writer.create()
                        if (
                            message.id != null &&
                            Object.hasOwnProperty.call(message, 'id')
                        )
                            writer
                                .uint32(/* id 1, wireType 0 =*/ 8)
                                .int64(message.id)
                        if (
                            message.name != null &&
                            Object.hasOwnProperty.call(message, 'name')
                        )
                            writer
                                .uint32(/* id 2, wireType 2 =*/ 18)
                                .string(message.name)
                        if (
                            message.email != null &&
                            Object.hasOwnProperty.call(message, 'email')
                        )
                            writer
                                .uint32(/* id 3, wireType 2 =*/ 26)
                                .string(message.email)
                        if (
                            message.imageUrl != null &&
                            Object.hasOwnProperty.call(message, 'imageUrl')
                        )
                            writer
                                .uint32(/* id 4, wireType 2 =*/ 34)
                                .string(message.imageUrl)
                        return writer
                    }

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @function decode
                     * @memberof web.gojek.clickstream.meta.User
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {web.gojek.clickstream.meta.User} User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    User.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader)
                        let end =
                                length === undefined
                                    ? reader.len
                                    : reader.pos + length,
                            message = new $root.web.gojek.clickstream.meta.User()
                        while (reader.pos < end) {
                            let tag = reader.uint32()
                            switch (tag >>> 3) {
                                case 1: {
                                    message.id = reader.int64()
                                    break
                                }
                                case 2: {
                                    message.name = reader.string()
                                    break
                                }
                                case 3: {
                                    message.email = reader.string()
                                    break
                                }
                                case 4: {
                                    message.imageUrl = reader.string()
                                    break
                                }
                                default:
                                    reader.skipType(tag & 7)
                                    break
                            }
                        }
                        return message
                    }

                    /**
                     * Verifies a User message.
                     * @function verify
                     * @memberof web.gojek.clickstream.meta.User
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    User.verify = function verify(message) {
                        if (typeof message !== 'object' || message === null)
                            return 'object expected'
                        if (message.id != null && message.hasOwnProperty('id'))
                            if (
                                !$util.isInteger(message.id) &&
                                !(
                                    message.id &&
                                    $util.isInteger(message.id.low) &&
                                    $util.isInteger(message.id.high)
                                )
                            )
                                return 'id: integer|Long expected'
                        if (
                            message.name != null &&
                            message.hasOwnProperty('name')
                        )
                            if (!$util.isString(message.name))
                                return 'name: string expected'
                        if (
                            message.email != null &&
                            message.hasOwnProperty('email')
                        )
                            if (!$util.isString(message.email))
                                return 'email: string expected'
                        if (
                            message.imageUrl != null &&
                            message.hasOwnProperty('imageUrl')
                        )
                            if (!$util.isString(message.imageUrl))
                                return 'imageUrl: string expected'
                        return null
                    }

                    /**
                     * Gets the default type url for User
                     * @function getTypeUrl
                     * @memberof web.gojek.clickstream.meta.User
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = 'type.googleapis.com'
                        }
                        return (
                            typeUrlPrefix + '/web.gojek.clickstream.meta.User'
                        )
                    }

                    return User
                })()

                return meta
            })()

            return clickstream
        })()

        return gojek
    })()

    return web
})())

export const google = ($root.google = (() => {
    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {}

    google.protobuf = (function () {
        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {}

        protobuf.Timestamp = (function () {
            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (
                        let keys = Object.keys(properties), i = 0;
                        i < keys.length;
                        ++i
                    )
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]]
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long
                ? $util.Long.fromBits(0, 0, false)
                : 0

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties)
            }

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer) writer = $Writer.create()
                if (
                    message.seconds != null &&
                    Object.hasOwnProperty.call(message, 'seconds')
                )
                    writer
                        .uint32(/* id 1, wireType 0 =*/ 8)
                        .int64(message.seconds)
                if (
                    message.nanos != null &&
                    Object.hasOwnProperty.call(message, 'nanos')
                )
                    writer
                        .uint32(/* id 2, wireType 0 =*/ 16)
                        .int32(message.nanos)
                return writer
            }

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader)
                let end =
                        length === undefined ? reader.len : reader.pos + length,
                    message = new $root.google.protobuf.Timestamp()
                while (reader.pos < end) {
                    let tag = reader.uint32()
                    switch (tag >>> 3) {
                        case 1: {
                            message.seconds = reader.int64()
                            break
                        }
                        case 2: {
                            message.nanos = reader.int32()
                            break
                        }
                        default:
                            reader.skipType(tag & 7)
                            break
                    }
                }
                return message
            }

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== 'object' || message === null)
                    return 'object expected'
                if (
                    message.seconds != null &&
                    message.hasOwnProperty('seconds')
                )
                    if (
                        !$util.isInteger(message.seconds) &&
                        !(
                            message.seconds &&
                            $util.isInteger(message.seconds.low) &&
                            $util.isInteger(message.seconds.high)
                        )
                    )
                        return 'seconds: integer|Long expected'
                if (message.nanos != null && message.hasOwnProperty('nanos'))
                    if (!$util.isInteger(message.nanos))
                        return 'nanos: integer expected'
                return null
            }

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = 'type.googleapis.com'
                }
                return typeUrlPrefix + '/google.protobuf.Timestamp'
            }

            return Timestamp
        })()

        return protobuf
    })()

    return google
})())

export { $root as default }
