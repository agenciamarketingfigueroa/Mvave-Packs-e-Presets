// ============================================================
// M-VAVE Product Data — Central product information repository
// ============================================================

const PRODUCTS_DATA = {

  // ============================
  // 1. SMK25-II (MIDI)
  // ============================
  'smk25-ii': {
    name: 'SMK25-II',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMK-25-2-MIDI.pdf',
    category: 'midi',
    tagline: {
      en: 'Next-Gen Wireless MIDI Keyboard',
      zh: '新一代无线 MIDI 键盘'
    },
    description: {
      en: 'The keyboard that goes where inspiration takes you. Wireless WIRELESS 5.0, 25 velocity-sensitive keys, illuminated RGB drum pads, and a battery that outlasts your longest session. The SMK25-II dissolves the boundary between studio and stage, giving you total creative freedom in a sleek, portable package.',
      zh: '灵感到哪，键盘就到哪。蓝牙 5.0 无线连接、25 个力度感应琴键、RGB 炫彩鼓垫，续航超越你最长的创作马拉松。SMK25-II 打破录音室与舞台的界限，以优雅便携的设计赋予你完全的创作自由。'
    },
    image: 'images/smk25-ii.webp',
    specs: [
      { param: { en: 'Keys', zh: '琴键' }, value: { en: '25 velocity-sensitive keys', zh: '25 个力度感应琴键' } },
      { param: { en: 'Drum Pads', zh: '鼓垫' }, value: { en: '16 RGB backlit pads', zh: '16 个 RGB 背光鼓垫' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 precision rotary encoders', zh: '8 个精密旋转编码器' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'WIRELESS 5.0 / USB-C MIDI', zh: '蓝牙 5.0 / USB-C MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '2000mAh Li-ion', zh: '2000mAh 锂电池' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB-C', zh: 'USB-C' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '321 x 178 x 46 mm', zh: '321 x 178 x 46 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '750g', zh: '750g' } },
      { param: { en: 'Special Features', zh: '特殊功能' }, value: { en: 'Smart Chord, Octave Transform, Arpeggiator, Transpose', zh: '智能和弦、八度变换、琶音器、移调' } }
    ],
    features: [
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'WIRELESS 5.0', zh: '蓝牙 5.0' },
        desc: { en: 'Wireless connection to PC, Mac, iOS, and Android. No cables, no limits.', zh: '无线连接 PC、Mac、iOS 和 Android。无线缆，无限制。' }
      },
      {
        icon: 'keyboard',
        color: 'cyan',
        title: { en: 'Velocity-Sensitive Keys', zh: '力度感应琴键' },
        desc: { en: '25 full-size velocity-sensitive keys for expressive, natural playing.', zh: '25 个全尺寸力度感应琴键，带来富有表现力的自然演奏。' }
      },
      {
        icon: 'pads',
        color: 'pink',
        title: { en: '16 RGB Drum Pads', zh: '16 个 RGB 鼓垫' },
        desc: { en: 'Backlit performance pads with velocity and aftertouch for finger drumming, sample triggering, and clip launching.', zh: '带力度感应与触后的背光演奏鼓垫，支持指鼓演奏、采样触发和片段启动。' }
      },
      {
        icon: 'chord',
        color: 'green',
        title: { en: 'Smart Chord', zh: '智能和弦' },
        desc: { en: 'Intelligent chord engine with octave transform for instant musical ideas.', zh: '智能和弦引擎，配合八度变换，即时激发音乐灵感。' }
      }
    ],
    highlights: [
      { label: { en: 'Keys', zh: '琴键' }, value: '25' },
      { label: { en: 'Pads', zh: '鼓垫' }, value: '16' },
      { label: { en: 'Battery', zh: '电池' }, value: '2000mAh' }
    ],
    gallery: ['images/productInfo/smk25-ii-1.webp', 'images/productInfo/smk25-ii-2.webp', 'images/productInfo/smk25-ii-3.webp', 'images/productInfo/smk25-ii-4.webp', 'images/productInfo/smk25-ii-5.webp', 'images/productInfo/smk25-ii-6.webp'],
    related: ['smk25', 'smc-pad', 'smc-mixer'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141698.html'
  },

  // ============================
  // 2. SMK25 (MIDI)
  // ============================
  'smk25': {
    name: 'SMK25',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMK-25-MIDI.pdf',
    category: 'midi',
    tagline: {
      en: 'Wireless MIDI Keyboard — Pure & Portable',
      zh: '无线 MIDI 键盘 — 纯粹与便携'
    },
    description: {
      en: 'Strip away complexity and keep the essentials. The SMK25 delivers 25 full-size velocity-sensitive keys, WIRELESS wireless connectivity, and a clean, intuitive layout. It is the perfect entry point into wireless music production — lightweight enough for your backpack, powerful enough for your biggest ideas.',
      zh: '去掉复杂，保留精华。SMK25 拥有 25 个全尺寸力度感应琴键和蓝牙无线连接，布局简洁直观。它是进入无线音乐制作的完美起点 — 轻至可以放入背包，强大到足以承载你最宏大的创意。'
    },
    image: 'images/smk25.webp',
    badge: null,
    specs: [
      { param: { en: 'Keys', zh: '琴键' }, value: { en: '25 velocity-sensitive keys', zh: '25 个力度感应琴键' } },
      { param: { en: 'Pads', zh: '鼓垫' }, value: { en: '8 RGB back-lit pads with velocity & aftertouch', zh: '8 个 RGB 背光鼓垫，支持力度感应与触后' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 assignable endless 360° encoders', zh: '8 个可分配 360° 编码器' } },
      { param: { en: 'Touch Strips', zh: '触控条' }, value: { en: 'Pitch bend & modulation', zh: '弯音与调制' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'BLE MIDI / USB-B MIDI', zh: 'BLE MIDI / USB-B MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: '1/4" sustain pedal jack', zh: '1/4 英寸延音踏板接口' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '2000mAh Li-ion (Battery supplied or USB-bus-powered)', zh: '2000mAh 锂电池（电池供电或 USB 总线供电）' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '321 x 178 x 46 mm', zh: '321 x 178 x 46 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '750g', zh: '750g' } }
    ],
    features: [
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'WIRELESS Wireless', zh: '蓝牙无线' },
        desc: { en: 'Cut the cord. Connect wirelessly to any DAW on any platform.', zh: '告别线缆。无线连接任何平台上的任何 DAW。' }
      },
      {
        icon: 'keyboard',
        color: 'cyan',
        title: { en: '25 Full-Size Keys', zh: '25 个全尺寸琴键' },
        desc: { en: 'Velocity-sensitive keys that respond to your touch with nuance and precision.', zh: '力度感应琴键，精准细腻地响应你的每一次触碰。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: 'All-Day Battery', zh: '全天续航' },
        desc: { en: 'Rechargeable battery keeps you creating without interruption.', zh: '可充电电池让创作不间断。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Ultra-Portable', zh: '极致便携' },
        desc: { en: 'Slim, lightweight design slips into any backpack or gig bag.', zh: '纤薄轻量设计，轻松放入任何背包或琴袋。' }
      }
    ],
    highlights: [
      { label: { en: 'Keys', zh: '琴键' }, value: '25' },
      { label: { en: 'Wireless', zh: '无线' }, value: 'BT' },
      { label: { en: 'Weight', zh: '重量' }, value: '750g' }
    ],
    gallery: ['images/productInfo/smk25-1.webp', 'images/productInfo/smk25-2.webp', 'images/productInfo/smk25-3.webp', 'images/productInfo/smk25-4.webp', 'images/productInfo/smk25-5.webp'],
    colors: [
      {
        name: { en: 'White', zh: '白色' },
        swatch: '#f4f4f2',
        images: ['images/productInfo/smk25-1.webp', 'images/productInfo/smk25-2.webp', 'images/productInfo/smk25-3.webp', 'images/productInfo/smk25-4.webp', 'images/productInfo/smk25-5.webp']
      },
      {
        name: { en: 'Red', zh: '红色' },
        swatch: '#d0021b',
        images: ['images/productInfo/smk25-red-1.webp', 'images/productInfo/smk25-red-2.webp', 'images/productInfo/smk25-red-3.webp', 'images/productInfo/smk25-red-4.webp', 'images/productInfo/smk25-red-5.webp']
      },
      {
        name: { en: 'Pink', zh: '粉色' },
        swatch: '#f5a3c7',
        images: ['images/productInfo/smk25-pink-1.webp', 'images/productInfo/smk25-pink-2.webp', 'images/productInfo/smk25-pink-3.webp', 'images/productInfo/smk25-pink-4.webp', 'images/productInfo/smk25-pink-5.webp']
      },
      {
        name: { en: 'Black', zh: '全黑' },
        swatch: '#1c1c1e',
        images: ['images/productInfo/smk25-allblack-1.webp', 'images/productInfo/smk25-allblack-2.webp', 'images/productInfo/smk25-allblack-3.webp', 'images/productInfo/smk25-allblack-4.webp', 'images/productInfo/smk25-allblack-5.webp', 'images/productInfo/smk25-allblack-6.webp']
      },
      {
        name: { en: 'Black & White', zh: '黑白' },
        swatch: 'linear-gradient(135deg, #1c1c1e 0%, #1c1c1e 50%, #f4f4f2 50%, #f4f4f2 100%)',
        images: ['images/productInfo/smk25-blackwhite-5.webp', 'images/productInfo/smk25-blackwhite-1.webp', 'images/productInfo/smk25-blackwhite-2.webp', 'images/productInfo/smk25-blackwhite-3.webp', 'images/productInfo/smk25-blackwhite-4.webp']
      }
    ],
    related: ['smk25-ii', 'smk-37-pro', 'smc-pad'],
    officialUrl: 'https://www.m-vave.com/productinfo/1041263.html'
  },

  // ============================
  // 2b. SMK-25 Black (MIDI)
  // ============================
  'smk25-black': {
    name: 'SMK-25 Black',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMK-25-MIDI.pdf',
    category: 'midi',
    tagline: {
      en: 'Wireless MIDI Keyboard — Pure & Portable',
      zh: '无线 MIDI 键盘 — 纯粹与便携'
    },
    description: {
      en: 'Strip away complexity and keep the essentials. The SMK25 delivers 25 full-size velocity-sensitive keys, WIRELESS wireless connectivity, and a clean, intuitive layout. It is the perfect entry point into wireless music production — lightweight enough for your backpack, powerful enough for your biggest ideas.',
      zh: '去掉复杂，保留精华。SMK25 拥有 25 个全尺寸力度感应琴键和蓝牙无线连接，布局简洁直观。它是进入无线音乐制作的完美起点 — 轻至可以放入背包，强大到足以承载你最宏大的创意。'
    },
    image: 'images/products/smk25-black.webp',
    msrp: 'USD 89.99',
    badge: null,
    specs: [
      { param: { en: 'Keys', zh: '琴键' }, value: { en: '25 velocity-sensitive keys', zh: '25 个力度感应琴键' } },
      { param: { en: 'Pads', zh: '鼓垫' }, value: { en: '8 RGB back-lit pads with velocity & aftertouch', zh: '8 个 RGB 背光鼓垫，支持力度感应与触后' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 assignable endless 360° encoders', zh: '8 个可分配 360° 编码器' } },
      { param: { en: 'Touch Strips', zh: '触控条' }, value: { en: 'Pitch bend & modulation', zh: '弯音与调制' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'BLE MIDI / USB-B MIDI', zh: 'BLE MIDI / USB-B MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: '1/4" sustain pedal jack', zh: '1/4 英寸延音踏板接口' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '2000mAh Li-ion (Battery supplied or USB-bus-powered)', zh: '2000mAh 锂电池（电池供电或 USB 总线供电）' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '321 x 178 x 46 mm', zh: '321 x 178 x 46 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '750g', zh: '750g' } }
    ],
    features: [
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'WIRELESS Wireless', zh: '蓝牙无线' },
        desc: { en: 'Cut the cord. Connect wirelessly to any DAW on any platform.', zh: '告别线缆。无线连接任何平台上的任何 DAW。' }
      },
      {
        icon: 'keyboard',
        color: 'cyan',
        title: { en: '25 Full-Size Keys', zh: '25 个全尺寸琴键' },
        desc: { en: 'Velocity-sensitive keys that respond to your touch with nuance and precision.', zh: '力度感应琴键，精准细腻地响应你的每一次触碰。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: 'All-Day Battery', zh: '全天续航' },
        desc: { en: 'Rechargeable battery keeps you creating without interruption.', zh: '可充电电池让创作不间断。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Ultra-Portable', zh: '极致便携' },
        desc: { en: 'Slim, lightweight design slips into any backpack or gig bag.', zh: '纤薄轻量设计，轻松放入任何背包或琴袋。' }
      }
    ],
    highlights: [
      { label: { en: 'Keys', zh: '琴键' }, value: '25' },
      { label: { en: 'Wireless', zh: '无线' }, value: 'BT' },
      { label: { en: 'Weight', zh: '重量' }, value: '750g' }
    ],
    gallery: ['images/productInfo/smk25-black-1.webp', 'images/productInfo/smk25-black-2.webp', 'images/productInfo/smk25-black-3.webp', 'images/productInfo/smk25-black-4.webp', 'images/productInfo/smk25-black-5.webp', 'images/productInfo/smk25-black-6.webp', 'images/productInfo/smk25-black-7.webp', 'images/productInfo/smk25-black-8.webp'],
    related: ['smk25-ii', 'smk-37-pro', 'smc-pad'],
    officialUrl: 'https://www.m-vave.com/productinfo/1041263.html'
  },

  // ============================
  // 3. SMK-37 PRO (MIDI)
  // ============================
  'smk-37-pro': {
    name: 'SMK-37 PRO',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMK-37PRO.pdf',
    category: 'midi',
    tagline: {
      en: 'Professional 37-Key Wireless MIDI Keyboard',
      zh: '专业 37 键无线 MIDI 键盘'
    },
    description: {
      en: 'More keys, more range, more expression. The SMK-37 PRO expands your creative canvas with 37 velocity-sensitive keys, making it the ideal choice for pianists, producers, and composers who need three full octaves of wireless freedom. Professional-grade build quality meets portable wireless design.',
      zh: '更多琴键，更广音域，更丰富表达。SMK-37 PRO 以 37 个力度感应琴键扩展你的创作画布，三个完整八度的无线自由，是钢琴演奏者、制作人和作曲家的理想之选。专业级制造品质与便携无线设计的完美融合。'
    },
    image: 'images/products/smk-37-pro-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Keys', zh: '琴键' }, value: { en: '37 velocity-sensitive keys', zh: '37 个力度感应琴键' } },
      { param: { en: 'Pads', zh: '鼓垫' }, value: { en: '16 RGB back-lit pads with velocity & aftertouch', zh: '16 个 RGB 背光鼓垫，支持力度感应与触后' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 assignable endless 360° encoders', zh: '8 个可分配 360° 编码器' } },
      { param: { en: 'Faders', zh: '推子' }, value: { en: '4 assignable slide potentiometers', zh: '4 个可分配推子' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'BLE MIDI / USB-C MIDI', zh: 'BLE MIDI / USB-C MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: '3.5mm audio out, 3.5mm MIDI out, 1/4" sustain', zh: '3.5mm 音频输出、3.5mm MIDI 输出、1/4" 延音踏板' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '2000mAh Li-ion, 10 hours', zh: '2000mAh 锂电池，续航 10 小时' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '458 x 181 x 50 mm', zh: '458 x 181 x 50 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '1.1kg', zh: '1.1kg' } }
    ],
    features: [
      {
        icon: 'keyboard',
        color: 'purple',
        title: { en: '37 Pro Keys', zh: '37 个专业琴键' },
        desc: { en: 'Three full octaves of velocity-sensitive keys for expressive performance.', zh: '三个完整八度的力度感应琴键，带来表现力丰富的演奏。' }
      },
      {
        icon: 'WIRELESS',
        color: 'cyan',
        title: { en: 'WIRELESS 5.0', zh: '蓝牙 5.0' },
        desc: { en: 'Stable wireless connection with ultra-low latency across all platforms.', zh: '稳定的无线连接，跨平台超低延迟。' }
      },
      {
        icon: 'pads',
        color: 'pink',
        title: { en: 'Performance Pads', zh: '演奏鼓垫' },
        desc: { en: '16 RGB backlit pads with velocity and aftertouch for drums, samples, and clip control.', zh: '16 个 RGB 背光鼓垫，支持力度感应与触后，用于鼓组、采样和片段控制。' }
      },
      {
        icon: 'chord',
        color: 'green',
        title: { en: 'Pitch & Mod Wheels', zh: '弯音与调制轮' },
        desc: { en: 'Dedicated pitch bend and modulation for expressive real-time control.', zh: '专用弯音和调制轮，实现富有表现力的实时控制。' }
      }
    ],
    highlights: [
      { label: { en: 'Keys', zh: '琴键' }, value: '37' },
      { label: { en: 'Pads', zh: '鼓垫' }, value: '16' },
      { label: { en: 'Battery', zh: '续航' }, value: '10h' }
    ],
    gallery: ['images/productInfo/smk-37-pro-1.webp', 'images/productInfo/smk-37-pro-2.webp', 'images/productInfo/smk-37-pro-3.webp', 'images/productInfo/smk-37-pro-4.webp', 'images/productInfo/smk-37-pro-5.webp', 'images/productInfo/smk-37-pro-6.webp'],
    related: ['smk25-ii', 'smk25', 'smc-pad'],
    officialUrl: 'https://www.m-vave.com/productinfo/1431195.html'
  },

  // ============================
  // 4. SMK-37 ELITE (MIDI)
  // ============================
  'smk-37-elite': {
    name: 'SMK-37 ELITE',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMK-37Elite-manual.pdf',
    category: 'midi',
    tagline: {
      en: '37-Key MIDI Keyboard with Built-in FM Synth Engine',
      zh: '37 键 MIDI 键盘，内置 FM 音源引擎'
    },
    description: {
      en: 'The SMK-37 ELITE is a professional 37-key velocity-sensitive MIDI keyboard packed with powerful performance tools. Featuring a built-in FM synthesis sound engine, 16 RGB backlit pads, 8 rotary encoders, 4 faders, a built-in sequencer, and arpeggiator — all in one versatile controller.',
      zh: 'SMK-37 ELITE 是一款专业级 37 键力度感应 MIDI 键盘，集多种强大演奏功能于一身。内置 FM 合成音源引擎、16 个 RGB 背光打击垫、8 个旋转编码器、4 路推子、内置音序器和琶音器，一台搞定一切。'
    },
    image: 'images/products/smk37-elite-nobg.webp',
    badge: 'NEW',
    specs: [
      { param: { en: 'Keys', zh: '琴键' }, value: { en: '37 velocity-sensitive keys (3 octaves)', zh: '37 个力度感应琴键（3 个八度）' } },
      { param: { en: 'Drum Pads', zh: '打击垫' }, value: { en: '16 RGB backlit pads (velocity & aftertouch)', zh: '16 个 RGB 背光打击垫（支持力度与触后）' } },
      { param: { en: 'Faders', zh: '推子' }, value: { en: '4 faders (expandable to 8 via bank button)', zh: '4 路推子（可通过组切换扩展至 8 路）' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 × 360° rotary encoders', zh: '8 个 360° 旋转编码器' } },
      { param: { en: 'Display', zh: '显示屏' }, value: { en: '1.54" display', zh: '1.54 英寸显示屏' } },
      { param: { en: 'Internal Sound', zh: '内置音源' }, value: { en: 'FM synthesis sound engine', zh: 'FM 合成音源引擎' } },
      { param: { en: 'Sequencer', zh: '音序器' }, value: { en: 'Built-in sequencer, 8 pattern storage', zh: '内置音序器，支持存储 8 个 Pattern' } },
      { param: { en: 'Arpeggiator', zh: '琶音器' }, value: { en: 'Built-in arpeggiator & note repeat', zh: '内置琶音器与音符重复功能' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'BLE MIDI / USB-C MIDI', zh: 'BLE MIDI / USB-C MIDI' } },
      { param: { en: 'Controls', zh: '控制' }, value: { en: 'Pitch & modulation wheels', zh: '弯音轮与调制轮' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '2000mAh Li-ion', zh: '2000mAh 锂电池' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '458 x 181 x 50 mm', zh: '458 x 181 x 50 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '1.1kg', zh: '1.1kg' } }
    ],
    features: [
      {
        icon: 'keyboard',
        color: 'purple',
        title: { en: '37 Velocity-Sensitive Keys', zh: '37 个力度感应琴键' },
        desc: { en: 'Three full octaves for expressive MIDI performance and composition.', zh: '三个完整八度，带来富有表现力的 MIDI 演奏与创作体验。' }
      },
      {
        icon: 'synth',
        color: 'cyan',
        title: { en: 'Built-in FM Sound Engine', zh: '内置 FM 合成音源' },
        desc: { en: 'Classic FM synthesis engine delivering rich electric pianos, crystalline bells and evolving harmonic textures.', zh: '经典 FM 合成音源引擎，演绎醇厚电钢琴、清亮钟声与丰富多变的动态音色。' }
      },
      {
        icon: 'pads',
        color: 'pink',
        title: { en: '16 RGB Backlit Pads', zh: '16 个 RGB 背光打击垫' },
        desc: { en: 'Velocity and aftertouch-sensitive pads for drums, samples, and live performance.', zh: '支持力度与触后感应的打击垫，适合鼓组、采样和现场演奏。' }
      },
      {
        icon: 'fader',
        color: 'green',
        title: { en: 'Full Production Controls', zh: '全面的制作控制器' },
        desc: { en: '4 faders (expandable to 8), 8 rotary encoders, arpeggiator, sequencer, and note repeat.', zh: '4 路推子（可扩展至 8 路）、8 个旋转编码器、琶音器、音序器与音符重复。' }
      }
    ],
    highlights: [
      { label: { en: 'Keys', zh: '琴键' }, value: '37' },
      { label: { en: 'Pads', zh: '鼓垫' }, value: '16' },
      { label: { en: 'Patterns', zh: '模式' }, value: '8' }
    ],
    gallery: [
      'images/productInfo/smk-37-elite-1.webp',
      'images/productInfo/smk-37-elite-2.webp',
      'images/productInfo/smk-37-elite-3.webp',
      'images/productInfo/smk-37-elite-4.webp',
      'images/productInfo/smk-37-elite-5.webp'
    ],
    related: ['smk-37-pro', 'smk25-ii', 'smc-pad'],
    officialUrl: 'https://www.m-vave.com'
  },

  // ============================
  // FM-1 (FM Synthesizer)
  // ============================
  'fm-1': {
    name: 'FM-1',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/FM-1-manual.pdf',
    category: 'midi',
    tagline: {
      en: 'A Pocket FM Synthesizer',
      zh: '口袋里的 FM 音色宇宙'
    },
    description: {
      en: 'FM-1 is a true frequency-modulation synthesizer in your pocket. Six independent sine-wave operators combine through 32 algorithms to recreate the iconic timbres of the FM era — pianos, strings, brass, basses and electronic synths. It comes loaded with 128 factory tones and a color TFT screen that draws the live algorithm structure and oscillator waveform. A 27-key silicone piano-layout keyboard with OCT-/OCT+ over 8 octaves, MONO/POLY voicing (up to 12-voice polyphony), six built-in effects (Filter / Reverb / Delay / Distortion / Chorus / Phaser), a 7-mode arpeggiator and 16-step sequencer turn it into a complete creation rig. Triple MIDI — USB Type-C, Bluetooth BLE MIDI and 3.5mm MIDI IN — work simultaneously, a 2000mAh battery delivers ~12 hours, and a built-in speaker lets you play and listen anywhere.',
      zh: 'FM-1 是一台真正可装进口袋的 FM 调频合成器。6 个独立正弦波振荡器（算子）通过 32 种算法任意组合，重现 FM 时代的钢琴、弦乐、铜管、贝斯、电子合成器等标志性音色。出厂内置 128 个音色，开机即可演奏；彩色 TFT 屏实时显示算法结构与振荡波形。27 键硅胶钢琴布局键盘、OCT-/OCT+ 扩展 8 个八度，支持 MONO 单音与 POLY 多音模式（最多 12 复音），内置 6 种效果器（滤波器 / 混响 / 延迟 / 失真 / 合唱 / 移相器）、7 种模式 ARP 琶音器与 16 步音序器，构成完整的内置创作工具链。三路 MIDI（USB Type-C、无线蓝牙 BLE MIDI、3.5mm MIDI IN）同时可用，2000mAh 锂电池续航约 12 小时，内置扬声器随时随地监听。'
    },
    image: 'images/products/fm-1.webp',
    badge: { en: 'New', zh: '新品' },
    specs: [
      { param: { en: 'Model', zh: '产品型号' }, value: { en: 'FM-1', zh: 'FM-1' } },
      { param: { en: 'Synthesis', zh: '合成方式' }, value: { en: 'FM Synthesis (6 operators, 32 algorithms)', zh: 'FM 调频合成（6 算子，32 算法）' } },
      { param: { en: 'Factory Presets', zh: '预设音色' }, value: { en: '128', zh: '128 个' } },
      { param: { en: 'Polyphony', zh: '复音数' }, value: { en: 'Up to 12 voices (POLY mode)', zh: '最多 12 复音（POLY 模式）' } },
      { param: { en: 'Keyboard', zh: '键盘' }, value: { en: '27-key silicone, standard piano layout', zh: '27 键硅胶键盘，标准钢琴布局' } },
      { param: { en: 'Effects', zh: '效果器' }, value: { en: 'Filter / Reverb / Delay / Distortion / Chorus / Phaser', zh: '滤波器 / 混响 / 延迟 / 失真 / 合唱 / 移相器' } },
      { param: { en: 'Arpeggiator', zh: '琶音器' }, value: { en: '7 modes (Up / Down / Inclusive / Exclusive / Bidirectional / Random / Order)', zh: '7 种模式（Up / Down / Inclusive / Exclusive / Bidirectional / Random / Order）' } },
      { param: { en: 'Sequencer', zh: '音序器' }, value: { en: '16 steps, up to 16 independent sequences', zh: '16 步，最多 16 个独立音序' } },
      { param: { en: 'Display', zh: '显示屏' }, value: { en: 'TFT color screen', zh: 'TFT 彩色显示屏' } },
      { param: { en: 'MIDI', zh: 'MIDI 接口' }, value: { en: 'USB MIDI · Bluetooth BLE MIDI · 3.5mm MIDI IN (all three usable simultaneously)', zh: 'USB MIDI · 无线蓝牙 MIDI · 3.5mm MIDI IN（三路同时可用）' } },
      { param: { en: 'Audio Output', zh: '音频输出' }, value: { en: '3.5mm stereo headphone jack', zh: '3.5mm 立体声耳机接口' } },
      { param: { en: 'Built-in Speaker', zh: '内置扬声器' }, value: { en: 'Yes (auto mute when headphones plugged in)', zh: '有（插耳机自动静音）' } },
      { param: { en: 'Charging', zh: '充电接口' }, value: { en: 'USB Type-C', zh: 'USB Type-C' } },
      { param: { en: 'Battery', zh: '电池容量' }, value: { en: '2000mAh — approx. 12 hours', zh: '2000mAh，续航约 12 小时' } },
      { param: { en: 'Rated Voltage', zh: '额定电压' }, value: { en: '3.7V', zh: '3.7V' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '161.5 × 96.5 × 28.6 mm', zh: '161.5 × 96.5 × 28.6 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'Approx. 251g', zh: '约 251g' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows / Mac / iOS / Android', zh: 'Windows / Mac / iOS / Android' } },
      { param: { en: 'FM SYSEX', zh: 'FM SYSEX' }, value: { en: 'Imports standard FM SYSEX banks (A/B/C/D libraries)', zh: '支持标准 FM SYSEX 音色解码，可直接导入 A/B/C/D 音色包' } },
      { param: { en: 'In the Box', zh: '出厂附带' }, value: { en: 'FM-1 ×1, packaging box ×1, user manual ×1', zh: 'FM-1 ×1，包装盒 ×1，说明书 ×1' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '6 Operators · 32 Algorithms', zh: '6 算子 · 32 算法' },
        desc: { en: 'A true FM engine — every operator is an independent sine oscillator that can act as a carrier or modulator. Six independent ADSR envelopes shape every dynamic; the screen renders the live algorithm structure in real time; EDIT mode opens deep per-operator parameter programming.', zh: '真正的 FM 调频合成引擎，每个算子均为独立正弦波振荡器，可作为载波或调制波使用。6 个算子均拥有独立 ADSR 包络，旋转 ALGORITHM 旋钮即可实时切换 32 种算法，屏幕实时显示当前算法结构图，EDIT 模式下对任意算子进行深度参数编程。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '128 Factory Tones · FM SYSEX', zh: '128 预设 · 兼容 FM SYSEX' },
        desc: { en: 'Piano, strings, brass, bass, classic FM synth pads — all on board and ready to play. Standard FM SYSEX decoding lets you import mainstream FM tone banks (A/B/C/D) for an unlimited tone library.', zh: '涵盖钢琴、弦乐、铜管、贝斯、电子合成器等经典 FM 音色，开机即可演奏。支持标准 FM SYSEX 音色解码，可直接导入主流 FM 合成器音色包（A/B/C/D 音色库），海量音色任你选用。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: '6 FX + ARP + 16-Step SEQ', zh: '6 效果器 + ARP + 16 步音序' },
        desc: { en: 'Built-in Filter, Reverb, Delay, Distortion, Chorus and Phaser; a 7-mode arpeggiator with KNOB 1–4 controlling speed, depth and rhythm in real time; a 16-step sequencer with up to 16 independent sequences, record/play/loop, 16-LED playback tracking and external MIDI sync.', zh: '内置滤波器、混响、延迟、失真、合唱、移相器 6 种效果；ARP 琶音器 7 种模式，Knob 1–4 实时控制速度、摆幅与节奏，按住按键即可触发；SEQ 16 步音序器最多 16 个独立音序，钢琴键直接输入音符，支持录制 / 回放 / 循环，16 步 LED 实时跟踪播放位置，可通过 MIDI 与外部设备同步。' }
      },
      {
        icon: 'usb',
        color: 'green',
        title: { en: 'Triple MIDI · 12-Hour Battery', zh: '三路 MIDI · 12 小时续航' },
        desc: { en: 'USB Type-C, Bluetooth BLE MIDI and 3.5mm MIDI IN — all three usable simultaneously, plug-and-play with PC/iOS/Android and ready to drive iPad, Mac or vintage MIDI gear. A 2000mAh battery delivers ~12 hours; the built-in speaker auto-mutes when you plug in headphones.', zh: 'FM-1 配备三种 MIDI 接口（USB Type-C、无线蓝牙 BLE MIDI、3.5mm MIDI IN）同时可用，可作为 MIDI 控制器或音色模块使用，免驱动即插即用，无缝接入 iPad / Mac / 手机以及老式合成器、声卡等传统 MIDI 设备。2000mAh 锂电池续航约 12 小时，内置扬声器随时监听，插耳机自动静音。' }
      }
    ],
    highlights: [
      { label: { en: 'Operators', zh: '算子' }, value: '6' },
      { label: { en: 'Algorithms', zh: '算法' }, value: '32' },
      { label: { en: 'Presets', zh: '预设' }, value: '128' }
    ],
    gallery: [
      'images/productInfo/fm-1-1.webp',
      'images/productInfo/fm-1-2.webp',
      'images/productInfo/fm-1-3.webp',
      'images/productInfo/fm-1-4.webp',
      'images/productInfo/fm-1-5.webp',
      'images/productInfo/fm-1-6.webp'
    ],
    colors: [
      {
        name: { en: 'Black', zh: '黑色' },
        swatch: '#1c1c1e',
        images: [
          'images/productInfo/fm-1-1.webp',
          'images/productInfo/fm-1-2.webp',
          'images/productInfo/fm-1-3.webp',
          'images/productInfo/fm-1-4.webp',
          'images/productInfo/fm-1-5.webp',
          'images/productInfo/fm-1-6.webp'
        ]
      },
      {
        name: { en: 'Purple', zh: '紫色' },
        swatch: 'linear-gradient(135deg, #e6b8e0 0%, #8a5cc4 100%)',
        images: [
          'images/productInfo/fm-1-purple-1.webp',
          'images/productInfo/fm-1-purple-2.webp',
          'images/productInfo/fm-1-purple-3.webp',
          'images/productInfo/fm-1-purple-4.webp',
          'images/productInfo/fm-1-purple-5.webp'
        ]
      },
      {
        name: { en: 'Orange', zh: '橙色' },
        swatch: '#f15a24',
        images: [
          'images/productInfo/fm-1-orange-1.webp',
          'images/productInfo/fm-1-orange-2.webp',
          'images/productInfo/fm-1-orange-3.webp',
          'images/productInfo/fm-1-orange-4.webp',
          'images/productInfo/fm-1-orange-5.webp'
        ]
      },
      {
        name: { en: 'Black-Green', zh: '黑绿色' },
        swatch: 'linear-gradient(135deg, #1c1c1e 0%, #5ec9b0 100%)',
        images: [
          'images/productInfo/fm-1-blackgreen-5.webp',
          'images/productInfo/fm-1-blackgreen-1.webp',
          'images/productInfo/fm-1-blackgreen-2.webp',
          'images/productInfo/fm-1-blackgreen-3.webp',
          'images/productInfo/fm-1-blackgreen-4.webp'
        ]
      },
      {
        name: { en: 'Cool Gray', zh: '冷灰色' },
        swatch: '#cfc6b0',
        images: [
          'images/productInfo/fm-1-coolgray-1.webp',
          'images/productInfo/fm-1-coolgray-2.webp',
          'images/productInfo/fm-1-coolgray-3.webp',
          'images/productInfo/fm-1-coolgray-4.webp',
          'images/productInfo/fm-1-coolgray-5.webp'
        ]
      },
      {
        name: { en: 'White-Blue', zh: '白蓝色' },
        swatch: 'linear-gradient(135deg, #f4f4f2 0%, #4a72a8 100%)',
        images: [
          'images/productInfo/fm-1-whiteblue-1.webp',
          'images/productInfo/fm-1-whiteblue-2.webp',
          'images/productInfo/fm-1-whiteblue-3.webp',
          'images/productInfo/fm-1-whiteblue-4.webp',
          'images/productInfo/fm-1-whiteblue-5.webp'
        ]
      }
    ],
    related: ['smk-37-elite', 'smk-37-pro', 'smc-pad']
  },

  // ============================
  // 5. SMC-PAD (MIDI)
  // ============================
  'smc-pad': {
    name: 'SMC-PAD',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMC-PAD_ZE.pdf',
    category: 'midi',
    tagline: {
      en: 'Wireless WIRELESS MIDI Pad Controller',
      zh: '无线蓝牙 MIDI 打击垫控制器'
    },
    description: {
      en: 'Sixteen pads of pure percussive power in your hands. The SMC-PAD is a wireless WIRELESS MIDI pad controller built for finger drummers, beat makers, and live performers who demand instant, tactile response. Compact enough for the desktop, expressive enough for the stage.',
      zh: '十六个鼓垫，纯粹打击力量尽在掌中。SMC-PAD 是为指鼓手、节拍制作人和现场表演者打造的无线蓝牙 MIDI 打击垫控制器，提供即时灵敏的触感响应。桌面够紧凑，舞台够专业。'
    },
    image: 'images/smc-pad.webp',
    badge: null,
    specs: [
      { param: { en: 'Pads', zh: '打击垫' }, value: { en: '16 RGB back-lit pads with velocity & aftertouch', zh: '16 个 RGB 背光打击垫，支持力度感应与触后' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 assignable endless 360° encoders', zh: '8 个可分配 360° 编码器' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'BLE MIDI / USB-C MIDI', zh: 'BLE MIDI / USB-C MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '2000mAh Li-ion', zh: '2000mAh 锂电池' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB-C', zh: 'USB-C' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '227 x 147 x 38 mm', zh: '227 x 147 x 38 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '520g', zh: '520g' } }
    ],
    features: [
      {
        icon: 'pads',
        color: 'purple',
        title: { en: '16 RGB Pads', zh: '16 个 RGB 打击垫' },
        desc: { en: 'Velocity-sensitive pads with vivid RGB backlighting for visual performance feedback.', zh: '力度感应打击垫，配有鲜艳 RGB 背光提供视觉演奏反馈。' }
      },
      {
        icon: 'WIRELESS',
        color: 'cyan',
        title: { en: 'WIRELESS 5.0', zh: '蓝牙 5.0' },
        desc: { en: 'True wireless freedom for untethered beat making and live performance.', zh: '真正的无线自由，释放节拍创作和现场表演。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: '2000mAh Battery', zh: '2000mAh 电池' },
        desc: { en: 'Built-in rechargeable battery for wireless beat-making sessions.', zh: '内置可充电电池，无线节拍制作随时随地。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Compact Form', zh: '紧凑机身' },
        desc: { en: 'Slim 227mm body fits on any desk or laptop bag.', zh: '227mm 紧凑机身，可放置于任何桌面或电脑包。' }
      }
    ],
    highlights: [
      { label: { en: 'Pads', zh: '打击垫' }, value: '16' },
      { label: { en: 'Encoders', zh: '编码器' }, value: '8' },
      { label: { en: 'Battery', zh: '电池' }, value: '2000mAh' }
    ],
    gallery: ['images/productInfo/smc-pad-1.webp', 'images/productInfo/smc-pad-2.webp', 'images/productInfo/smc-pad-3.webp', 'images/productInfo/smc-pad-4.webp'],
    related: ['smk25-ii', 'smc-mixer', 'smk25'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106104.html'
  },

  // ============================
  // 5. SMC-Mixer (MIDI)
  // ============================
  'smc-mixer': {
    name: 'SMC-Mixer',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMC-MIXER_ZE.pdf',
    category: 'midi',
    tagline: {
      en: 'Wireless DAW Control Surface',
      zh: '无线 DAW 控制台'
    },
    description: {
      en: 'Take command of your mix with physical precision. The SMC-Mixer is a wireless DAW control surface with touch-sensitive faders, rotary encoders, and deep host integration. Whether you are mixing in Logic, Ableton, or FL Studio, the SMC-Mixer puts tactile control at your fingertips, completely cable-free.',
      zh: '以物理精度掌控你的混音。SMC-Mixer 是一款无线 DAW 控制台，配备触摸感应推子、旋转编码器和深度宿主集成。无论你使用 Logic、Ableton 还是 FL Studio，SMC-Mixer 将触感控制带到你的指尖，完全无线缆。'
    },
    image: 'images/smc-mixer.webp',
    badge: null,
    specs: [
      { param: { en: 'Faders', zh: '推子' }, value: { en: '8 touch-sensitive faders', zh: '8 个触摸感应推子' } },
      { param: { en: 'Encoders', zh: '编码器' }, value: { en: '8 rotary encoders', zh: '8 个旋转编码器' } },
      { param: { en: 'Buttons', zh: '按钮' }, value: { en: '43 programmable buttons with LED', zh: '43 个可编程 LED 按钮' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'WIRELESS 5.0 / USB-C', zh: '蓝牙 5.0 / USB-C' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS (Logic, Ableton, FL Studio, etc.)', zh: 'Windows、macOS（Logic、Ableton、FL Studio 等）' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '780mAh Li-ion (Battery supplied or USB-bus-powered)', zh: '780mAh 锂电池（电池或 USB 总线供电）' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '256 x 122 x 40 mm', zh: '256 x 122 x 40 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '445g', zh: '445g' } }
    ],
    features: [
      {
        icon: 'faders',
        color: 'purple',
        title: { en: 'Touch-Sensitive Faders', zh: '触摸感应推子' },
        desc: { en: '8 faders for precise volume and parameter control.', zh: '8 个推子，精确控制音量和参数。' }
      },
      {
        icon: 'WIRELESS',
        color: 'cyan',
        title: { en: 'Wireless DAW Control', zh: '无线 DAW 控制' },
        desc: { en: 'WIRELESS connectivity with deep integration into major DAWs.', zh: '蓝牙连接，深度集成主流 DAW。' }
      },
      {
        icon: 'led',
        color: 'pink',
        title: { en: 'LED Feedback', zh: 'LED 反馈' },
        desc: { en: 'Visual button feedback keeps you in sync with your session state.', zh: '按钮视觉反馈让你始终与会话状态同步。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Portable Design', zh: '便携设计' },
        desc: { en: 'Lightweight and wireless — mix anywhere, anytime.', zh: '轻量无线 — 随时随地混音。' }
      }
    ],
    highlights: [
      { label: { en: 'Faders', zh: '推子' }, value: '8' },
      { label: { en: 'Encoders', zh: '编码器' }, value: '8' },
      { label: { en: 'Battery', zh: '电池' }, value: '780mAh' }
    ],
    gallery: ['images/productInfo/smc-mixer-1.webp', 'images/productInfo/smc-mixer-2.webp', 'images/productInfo/smc-mixer-3.webp'],
    related: ['smc-pad', 'smk25-ii', 'smk25'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106102.html'
  },

  // ============================
  // 6. SWS11 (Wireless)
  // ============================
  'sws11': {
    name: 'SWS11',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/SWS11-manual.pdf',
    category: 'wireless',
    tagline: {
      en: '5.8GHz Wireless Audio Transmission System',
      zh: '5.8GHz 无线音频传输系统'
    },
    description: {
      en: 'Freedom starts here. The SWS11 is a high-performance 5.8GHz wireless audio transmission system with just 4.6ms latency and 30m+ range. One transmitter pairs with up to 6 receivers at once, with 6 LED channel colors to dodge interference, and a charging-case design keeps you powered through outdoor sets.',
      zh: '自由从这里开始。SWS11 是一款高性能 5.8GHz 无线音频传输系统，延迟仅 4.6ms，传输距离 30 米以上。一个发射器最多可同时连接 6 个接收器，配备 6 种 LED 频点颜色避免干扰，充电仓设计让户外演出电量无忧。'
    },
    image: 'images/products/sws11-nobg.webp',
    badge: { en: 'NEW', zh: '新品' },
    specs: [
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '5.8GHz', zh: '5.8GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '4.6ms', zh: '4.6ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m+ (open space)', zh: '30 米以上（开阔环境）' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 6 sets simultaneously', zh: '最多 6 组同时使用' } },
      { param: { en: 'Channels', zh: '频点指示' }, value: { en: '6 LED color channels', zh: '6 种 LED 颜色频点' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: 'Charging-case design (USB-C)', zh: '充电仓设计（USB-C）' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '6.35mm', zh: '6.35mm' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: '5.8GHz Wireless', zh: '5.8GHz 无线' },
        desc: { en: '5.8GHz band sidesteps crowded 2.4GHz interference for clean, stable transmission.', zh: '5.8GHz 频段避开拥挤的 2.4GHz 干扰，传输纯净稳定。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: '4.6ms Latency', zh: '4.6ms 延迟' },
        desc: { en: 'Ultra-low 4.6ms latency, indistinguishable from a cable.', zh: '超低 4.6ms 延迟，与直接插线无异。' }
      },
      {
        icon: 'audio',
        color: 'green',
        title: { en: '1-to-6 Transmission', zh: '一对六传输' },
        desc: { en: 'One transmitter connects up to 6 receivers at the same time.', zh: '一个发射器最多同时连接 6 个接收器。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'Charging Case', zh: '充电仓' },
        desc: { en: 'Built-in charging case solves power supply for outdoor scenarios.', zh: '内置充电仓，解决户外场景供电问题。' }
      },
    ],
    highlights: [
      { label: { en: 'Range', zh: '距离' }, value: '30m+' },
      { label: { en: 'Latency', zh: '延迟' }, value: '4.6ms' },
      { label: { en: 'Channels', zh: '通道' }, value: '6' }
    ],
    gallery: ['images/productInfo/sws11-1.webp', 'images/productInfo/sws11-2.webp', 'images/productInfo/sws11-3.webp', 'images/productInfo/sws11-4.webp', 'images/productInfo/sws11-5.webp', 'images/productInfo/sws11-6.webp', 'images/productInfo/sws11-7.webp'],
    related: ['wp-9', 'tank-g', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/3556672.html'
  },

  // ============================
  // 7. WP-9 (Wireless)
  // ============================
  'wp-9': {
    name: 'WP-9',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS9.pdf',
    category: 'wireless',
    tagline: {
      en: 'Wireless IEM System',
      zh: '无线耳机监听系统'
    },
    description: {
      en: 'Pro-grade wireless monitoring with nothing in your way. The WP-9 is a 2.4GHz in-ear monitor system with 24bit/48KHz lossless audio, 30m range, and mono latency as low as 4.5ms. Its compact lavalier design clips on or converts to a mini belt pack, with LED indicators for stereo/mono, battery, volume and mute, and up to 4 sets running together.',
      zh: '专业级无线监听，毫无束缚。WP-9 是一款 2.4GHz 入耳监听系统，24bit/48KHz 无损音质、30 米传输距离、单声道延迟低至 4.5ms。小巧的领夹设计可夹戴或转为迷你腰包，LED 实时显示立体声/单声道、电量、音量与静音状态，最多支持 4 组同时使用。'
    },
    image: 'images/products/wp-9-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz lossless', zh: '24bit / 48KHz 无损' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz', zh: '2.4GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: 'Stereo 10.8ms / Mono 4.5ms', zh: '立体声 10.8ms / 单声道 4.5ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m', zh: '30 米' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 4 sets simultaneously', zh: '最多 4 组同时使用' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'About 6 hours', zh: '满电约 6 小时' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in Li-ion (TX 450mAh / RX 780mAh), 3.7V', zh: '内置锂电池（TX 450mAh / RX 780mAh），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB (5V 1A recommended)', zh: 'USB（建议 5V 1A）' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '60(L) x 40(W) x 15(H) mm', zh: '60(L) x 40(W) x 15(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'TX 35g / RX 29g', zh: '发射器 35g / 接收器 29g' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '24bit/48KHz Lossless', zh: '24bit/48KHz 无损' },
        desc: { en: 'Lossless professional sound quality for transparent monitoring.', zh: '无损专业音质，监听通透还原。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: 'Low Latency', zh: '超低延迟' },
        desc: { en: 'As low as 4.5ms in mono, ideal for live in-ear monitoring.', zh: '单声道延迟低至 4.5ms，适合现场入耳监听。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Lavalier Design', zh: '领夹设计' },
        desc: { en: 'Compact clip-on body that converts into a mini belt pack.', zh: '小巧领夹机身，可转换为迷你腰包。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'Up to 4 Sets', zh: '最多 4 组' },
        desc: { en: 'One transmitter to many receivers, up to 4 sets running together.', zh: '一拖多，最多 4 组同时工作。' }
      },
    ],
    highlights: [
      { label: { en: 'Range', zh: '距离' }, value: '30m' },
      { label: { en: 'Latency', zh: '延迟' }, value: '<6ms' },
      { label: { en: 'Build', zh: '机身' }, value: 'Metal' }
    ],
    gallery: ['images/productInfo/wp-9-1.webp', 'images/productInfo/wp-9-2.webp', 'images/productInfo/wp-9-3.webp', 'images/productInfo/wp-9-4.webp', 'images/productInfo/wp-9-5.webp'],
    related: ['sws11', 'tank-g', 'classic-delay'],
    officialUrl: 'https://www.m-vave.com/productinfo/1293536.html'
  },

  // ============================
  // 8. TANK-G (Multi-Effects)
  // ============================
  'tank-g': {
    name: 'TANK-G',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/TANK-G-Z.pdf',
    category: 'multi',
    tagline: {
      en: 'Versatile Electric-Guitar Multi-Effects Pedal',
      zh: '多功能电吉他效果器'
    },
    description: {
      en: 'The TANK-G is a versatile electric-guitar multi-effects pedal. It comes with 36 factory presets that you can edit, save, or overwrite with your own tones. A built-in rechargeable battery solves the problem of outdoor power. The TANK-G features a noise gate, 9 classic amp-head models, a 3-band EQ, 3 modulation effects, 3 delays, 3 reverbs, 8 classic IR cabinet simulations, and a high-precision tuner. Download the companion PC software or mobile APP free from our official channels to edit, exchange, share, and import/export tone data, load IR files and AMP tone files, and customize the footswitch LED color of each preset — the PC software can also restore the unit to factory settings. The TANK-G also offers phone direct recording, wireless BT music playback, headphone monitoring, XLR balanced output, and USB audio-interface functionality. With so many functions in one compact, great-sounding, easy-to-carry unit, it makes an excellent guitar companion.',
      zh: 'TANK-G 是一款多功能电吉他效果器。TANK-G 预设有 36 个出厂音色，用户可自定义音色进行覆盖储存，也可以对预设音色进行编辑和保存。本产品内置蓄电池，解决了户外供电的问题。TANK-G 具备降噪效果器、9 种经典的箱头音色模拟、三段 EQ 调节器、三种调制效果、三种延时效果、三种混响、8 种经典的 IR 箱体模拟以及一个高精度的校音器。可从我司官方渠道免费下载配套的电脑软件或者手机 APP 软件，支持使用软件编辑、交换、共享、导入/导出音色数据，导入 IR 文件和 AMP 音色文件，以及自定义每个预设的踩钉灯显示颜色，使用电脑软件还可对本机恢复出厂设置。另外 TANK-G 还带有手机内录功能、无线 BT 音乐播放功能、耳机监听功能、XLR 平衡输出功能及电脑声卡功能。多种功能效果集于一身，体积小性能好，便于携带且音色优秀，是您不错的吉他伴侣。'
    },
    image: 'images/tank-g.webp',
    badge: null,
    specs: [
      { param: { en: 'Inputs', zh: '输入' }, value: { en: 'Standard 1/4" mono (TS)', zh: '标准 1/4" 单声道接口 / TS' } },
      { param: { en: 'Outputs', zh: '输出' }, value: { en: 'Standard 1/4" mono (TS), 1/8" stereo out, XLR balanced out, direct-recording out', zh: '标准 1/4" 单声道接口 / TS、1/8" 立体声输出、XLR 接口平衡输出、内录接口输出' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '44.1KHz / 24bit', zh: '44.1KHz / 24bit' } },
      { param: { en: 'Presets', zh: '预设' }, value: { en: '36 factory presets (user-overwritable)', zh: '36 个出厂音色（可覆盖储存）' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '310(L) × 65(W) × 40(H) mm', zh: '310(L) × 65(W) × 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '613g', zh: '613g' } },
      { param: { en: 'Power & USB Data', zh: '电源供给 & USB 数据传输' }, value: { en: 'Type-C, 5V ≥300mA', zh: 'Type-C、5V ≥300mA' } },
      { param: { en: 'Third-party IR Format', zh: '第三方 IR 文件格式要求' }, value: { en: '44.1K/24bit mono WAV, 1024 samples', zh: '44.1K/24Bit，单声道 WAV 文件，1024 采样点' } },
      { param: { en: 'Battery Model', zh: '电池型号规格' }, value: { en: '755060', zh: '755060' } },
      { param: { en: 'Battery Voltage', zh: '电池标称电压' }, value: { en: '3.7V', zh: '3.7V' } },
      { param: { en: 'Battery Capacity', zh: '电池容量' }, value: { en: '3000mAh', zh: '3000mAh' } },
      { param: { en: 'Working Current', zh: '工作电流' }, value: { en: '200mA', zh: '200mA' } }
    ],
    features: [
      {
        icon: 'effects',
        color: 'purple',
        title: { en: 'Complete FX Suite', zh: '完整效果链' },
        desc: { en: 'Noise gate, 3-band EQ, 3 modulations, 3 delays, 3 reverbs, and a high-precision tuner — everything you need in one signal chain.', zh: '降噪、三段 EQ、三种调制、三种延时、三种混响，以及一个高精度校音器 —— 一条信号链满足所有需求。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: '9 Amps + 8 IR Cabs', zh: '9 箱头 + 8 IR 箱体' },
        desc: { en: '9 classic amp-head models and 8 classic IR cabinet simulations — and you can import your own AMP and IR files.', zh: '9 种经典箱头音色模拟与 8 种经典 IR 箱体模拟，并支持导入自己的 AMP 与 IR 文件。' }
      },
      {
        icon: 'app',
        color: 'pink',
        title: { en: 'APP & PC Editing', zh: 'APP 与电脑编辑' },
        desc: { en: 'Edit, swap, share, and import/export tones, customize each preset\'s footswitch LED color, and restore factory settings via PC.', zh: '编辑、交换、共享、导入/导出音色，自定义每个预设的踩钉灯颜色，电脑软件还可恢复出厂设置。' }
      },
      {
        icon: 'headphone',
        color: 'green',
        title: { en: 'All-In-One Connectivity', zh: '一体化连接' },
        desc: { en: 'Phone direct recording, wireless BT music playback, headphone monitoring, XLR balanced output, and USB audio-interface mode.', zh: '手机内录、无线 BT 音乐播放、耳机监听、XLR 平衡输出及电脑声卡功能。' }
      }
    ],
    highlights: [
      { label: { en: 'Presets', zh: '预设' }, value: '36' },
      { label: { en: 'Amps', zh: '箱头' }, value: '9' },
      { label: { en: 'IR Cabs', zh: 'IR 箱体' }, value: '8' }
    ],
    gallery: ['images/productInfo/tank-g-1.webp', 'images/productInfo/tank-g-2.webp', 'images/productInfo/tank-g-3.webp'],
    related: ['mk-300', 'pocket-amp', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/3554733.html'
  },

  // ============================
  // TANK PRO (Multi-Effects)
  // ============================
  'tank-pro': {
    name: 'TANK-PRO',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/TANK-PRO.pdf',
    category: 'multi',
    tagline: {
      en: 'Guitar / Bass Multi-Effects Processor',
      zh: '吉他/贝斯综合效果器'
    },
    description: {
      en: 'TANK-PRO is a professional guitar/bass multi-effects processor. A rich tone library serves professional creation, deep customization keeps control flexible and intuitive, stage-optimized design ensures stable output, and smart expandability adapts to diverse playing scenarios. With 90 amp models, 90 cabinet simulations, 30 distortion/overdrive types, plus modulation, delay, reverb, EQ and more — 300+ effects in total — a 2.4-inch LCD display, a built-in drum machine, and up to 150.8s of loop recording, it is a complete stage performance and creation rig.',
      zh: 'TANK-PRO 是一款专业级吉他/贝斯综合效果器。丰富的音色库满足专业创作需求，高度自定义让操作灵活随心，为演出场景优化以保障稳定输出，并支持智能化扩展适配多元场景。内置 90 个音箱模拟、90 个箱体模拟、30 种失真/过载，以及调制、延迟、混响、均衡等共 300+ 效果，搭配 2.4 英寸 LCD 显示屏、内置鼓机与最长 150.8s 的循环录音，是一套完整的舞台演出与创作设备链。'
    },
    image: 'images/tank-pro.webp',
    badge: { en: 'New', zh: '新品' },
    specs: [
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '44.1KHz / 24bit', zh: '44.1KHz / 24bit' } },
      { param: { en: 'SNR', zh: '信噪比' }, value: { en: '117dB', zh: '117dB' } },
      { param: { en: 'Effects', zh: '效果数量' }, value: { en: '300+', zh: '300+' } },
      { param: { en: 'Effect Modules', zh: '效果模块' }, value: { en: 'Up to 10 simultaneously', zh: '最多可同时使用 10 个' } },
      { param: { en: 'Presets', zh: '预设数量' }, value: { en: '120 (60 factory presets)', zh: '120 个（60 个出厂预设）' } },
      { param: { en: 'Max Loop Time', zh: 'LOOP 最大录制时间' }, value: { en: '150.8s', zh: '150.8s' } },
      { param: { en: 'Drum Machine', zh: '内置鼓机' }, value: { en: '100 rhythm patterns', zh: '100 种节奏型' } },
      { param: { en: 'Display', zh: '显示屏' }, value: { en: '2.4-inch LCD', zh: '2.4 英寸 LCD 显示屏' } },
      { param: { en: 'USB', zh: 'USB 接口' }, value: { en: 'USB 2.0 Type-C — USB Audio / MIDI / LOOPBACK switch / RE-AMP; battery charging input & data transfer', zh: 'USB 2.0 Type-C，支持 USB Audio / MIDI / LOOPBACK 开关 / RE-AMP；内置电池充电输入与数据传输' } },
      { param: { en: 'Outputs', zh: '输出接口' }, value: { en: 'Pair of 6.35mm (1/4") TS stereo unbalanced + pair of XLR stereo balanced (with ground-lift switch) + 3.5mm (1/8") TRS stereo headphone', zh: '一对 6.35mm(1/4") TS 立体声非平衡 + 一对 XLR 立体声平衡（附带地线切除开关）+ 一个 3.5mm(1/8") TRS 立体声耳机输出' } },
      { param: { en: 'Inputs', zh: '输入接口' }, value: { en: 'Guitar/Bass input; 3.5mm MIDI input; 1 external expression pedal', zh: '吉他/贝斯输入；3.5mm MIDI 输入；支持 1 个外接表情踏板' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '260mm × 100mm × 52mm', zh: '260mm × 100mm × 52mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'Approx. 800g', zh: '约 800g' } },
      { param: { en: 'Working Current', zh: '工作电流' }, value: { en: 'Approx. 400mA', zh: '约 400mA' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '3000mAh / 11.1Wh, model DTP105050, 3.7V nominal', zh: '3000mAh / 11.1Wh，型号 DTP105050，标称 3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: '5V / 1A', zh: '5V / 1A' } },
      { param: { en: 'Battery Life', zh: '续航时长' }, value: { en: 'Approx. 7 hours', zh: '约 7 小时' } },
      { param: { en: 'BT Accompaniment', zh: 'BT 伴奏' }, value: { en: 'Supported', zh: '支持' } },
      { param: { en: 'Community Tone Platform', zh: '社区音色互动平台' }, value: { en: 'Supported', zh: '支持' } },
      { param: { en: 'AMP / DS Module', zh: 'AMP / DS 模块' }, value: { en: 'Supports importing amX Data files', zh: '支持导入 amX Data 文件' } },
      { param: { en: 'CAB Module', zh: 'CAB 模块' }, value: { en: 'Supports 44.1KHz/24bit mono WAV, 1024/2048 samples', zh: '支持导入 44.1KHz/24bit 单声道 WAV 文件，1024/2048 采样点' } },
      { param: { en: 'Editor Software', zh: '音色编辑软件' }, value: { en: 'Windows / Mac / iOS / Android', zh: 'Windows / Mac / iOS / Android' } },
      { param: { en: 'In the Box', zh: '出厂附带' }, value: { en: 'USB cable ×1, manual ×1', zh: 'USB 连接线 ×1，说明书 ×1' } }
    ],
    features: [
      {
        icon: 'effects',
        color: 'purple',
        title: { en: 'Core Effect Modules', zh: '核心效果模块' },
        desc: { en: '90 amp models (AMP), 90 cabinet simulations (CAB), 30 distortion/overdrive types (DS), plus modulation, delay, reverb, EQ and more.', zh: '90 个音箱模拟（AMP）、90 个箱体模拟（CAB）、30 种失真/过载（DS），以及各种调制、延迟、混响、均衡等。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'Dual FX & WAH', zh: '双 FX 与 WAH 模块' },
        desc: { en: 'Dual FX modules with 5 noise gates, 5 compressors, 5 exciters and more pre-stage effects; WAH module with 4 expression-pedal wahs and 2 auto-wahs.', zh: '双 FX 模块集成 5 个噪声门、5 个压缩、5 个激励等更多前级效果；WAH 模块包含 4 种表情踏板哇音、2 种自动哇音。' }
      },
      {
        icon: 'loop',
        color: 'green',
        title: { en: 'Looper & Drum Machine', zh: '循环器与鼓机' },
        desc: { en: 'Up to 150.8s loop with tap-tempo sync and preset switching; built-in drum machine with 100 rhythm patterns, switchable via footswitch.', zh: 'LOOP 循环长达 150.8s，支持打点定速同步与预设切换；内置鼓机 100 种节奏型，可通过脚踏开关切换。' }
      },
      {
        icon: 'app',
        color: 'pink',
        title: { en: 'CTRL / Knob / Pedal Mapping & LIVE Mode', zh: '映射控制与 LIVE 模式' },
        desc: { en: 'Dedicated CTRL footswitch mapping across multiple screens, knob mapping on nearly every screen, expression-pedal mapping to volume/pan with PT/IP1/IP2 switching, and a LIVE mode that locks footswitch and button functions for performance.', zh: 'CTRL 模式专属踩钉功能映射，可在多个界面使用；旋钮可在几乎所有界面进行参数映射；外接表情踏板可映射至音量、声像等参数并具备 PT/IP1/IP2 状态切换；LIVE 模式锁定踩钮与按钮功能，专注现场表演。' }
      }
    ],
    highlights: [
      { label: { en: 'Effects', zh: '效果' }, value: '300+' },
      { label: { en: 'Amp Models', zh: '音箱模型' }, value: '90' },
      { label: { en: 'Looper', zh: '循环' }, value: '150.8s' }
    ],
    gallery: ['images/productInfo/tank-pro-1.webp', 'images/productInfo/tank-pro-2.webp', 'images/productInfo/tank-pro-3.webp', 'images/productInfo/tank-pro-4.webp', 'images/productInfo/tank-pro-5.webp', 'images/productInfo/tank-pro-6.webp'],
    colors: [
      {
        name: { en: 'Silver', zh: '银色' },
        swatch: '#c9ccce',
        images: ['images/productInfo/tank-pro-1.webp', 'images/productInfo/tank-pro-2.webp', 'images/productInfo/tank-pro-3.webp', 'images/productInfo/tank-pro-4.webp', 'images/productInfo/tank-pro-5.webp', 'images/productInfo/tank-pro-6.webp']
      },
      {
        name: { en: 'Black', zh: '黑色' },
        swatch: '#1c1c1e',
        images: ['images/productInfo/tank-pro-black-1.webp', 'images/productInfo/tank-pro-black-2.webp', 'images/productInfo/tank-pro-black-3.webp', 'images/productInfo/tank-pro-black-4.webp', 'images/productInfo/tank-pro-black-5.webp']
      },
      {
        name: { en: 'Green', zh: '青绿色' },
        swatch: '#3fb7ab',
        images: ['images/productInfo/tank-pro-green-1.webp', 'images/productInfo/tank-pro-green-2.webp', 'images/productInfo/tank-pro-green-3.webp', 'images/productInfo/tank-pro-green-4.webp', 'images/productInfo/tank-pro-green-5.webp', 'images/productInfo/tank-pro-green-6.webp']
      }
    ],
    related: ['tank-g', 'mk-300', 'pocket-amp']
  },

  // ============================
  // 9. MK-300 (Multi-Effects)
  // ============================
  'mk-300': {
    name: 'MK-300',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/MK-300.pdf',
    category: 'multi',
    tagline: {
      en: 'Professional Multi-Effects with 300+ Sounds',
      zh: '300+ 音色的专业综合效果器'
    },
    description: {
      en: 'Three hundred reasons to leave your pedalboard at home. The MK-300 is a professional-grade multi-effects processor featuring 300+ effects, amp models, and cab simulations with a built-in looper and expression pedal. Intuitive footswitch control and a full-color display let you dial in your perfect tone on stage or in the studio.',
      zh: '三百个理由让你把效果板留在家。MK-300 是一款专业级综合效果器，拥有 300+ 效果、音箱模型和箱体模拟，内置循环器和表情踏板。直观的脚踏开关控制和全彩显示屏，让你在舞台或录音室中轻松找到完美音色。'
    },
    image: 'images/products/mk-300-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Effects', zh: '效果' }, value: { en: '300+ effects and amp models', zh: '300+ 效果和音箱模型' } },
      { param: { en: 'Presets', zh: '预设' }, value: { en: '200 user presets', zh: '200 个用户预设' } },
      { param: { en: 'Looper', zh: '循环器' }, value: { en: '150s recording loop', zh: '150 秒录音循环' } },
      { param: { en: 'Expression Pedal', zh: '表情踏板' }, value: { en: 'Built-in expression pedal', zh: '内置表情踏板' } },
      { param: { en: 'Display', zh: '显示屏' }, value: { en: 'Full-color LCD', zh: '全彩 LCD' } },
      { param: { en: 'I/O', zh: '输入输出' }, value: { en: 'Guitar In, Stereo Out, Headphone, Aux In, USB', zh: '吉他输入、立体声输出、耳机、辅助输入、USB' } },
      { param: { en: 'IR Support', zh: 'IR 支持' }, value: { en: 'Third-party IR loading via APP', zh: '通过 APP 加载第三方 IR' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: '5V 2A', zh: '5V 2A' } }
    ],
    features: [
      {
        icon: 'effects',
        color: 'purple',
        title: { en: '300+ Effects', zh: '300+ 效果' },
        desc: { en: 'A vast library of effects covering every genre and playing style.', zh: '覆盖所有风格和演奏方式的庞大效果库。' }
      },
      {
        icon: 'expression',
        color: 'cyan',
        title: { en: 'Expression Pedal', zh: '表情踏板' },
        desc: { en: 'Built-in expression control for wah, volume, and real-time modulation.', zh: '内置表情控制，用于哇音、音量和实时调制。' }
      },
      {
        icon: 'loop',
        color: 'green',
        title: { en: '150s Looper', zh: '150 秒循环器' },
        desc: { en: 'Layer ideas with up to 150 seconds of loop recording and overdub.', zh: '最高 150 秒循环录音和叠录，层层叠加你的创意。' }
      },
      {
        icon: 'app',
        color: 'pink',
        title: { en: 'APP Editing', zh: 'APP 编辑' },
        desc: { en: 'Deep patch editing and IR loading from your mobile device.', zh: '通过移动设备进行深度音色编辑和 IR 加载。' }
      }
    ],
    highlights: [
      { label: { en: 'Effects', zh: '效果' }, value: '300+' },
      { label: { en: 'Presets', zh: '预设' }, value: '200' },
      { label: { en: 'Looper', zh: '循环' }, value: '150s' }
    ],
    gallery: ['images/productInfo/mk-300-1.webp', 'images/productInfo/mk-300-2.webp', 'images/productInfo/mk-300-3.webp', 'images/productInfo/mk-300-4.webp', 'images/productInfo/mk-300-5.webp'],
    related: ['tank-g', 'pocket-amp', 'loop-ii'],
    officialUrl: 'https://www.m-vave.com/productinfo/3554735.html'
  },

  // ============================
  // 10. MINI-UNIVERSE (Effects)
  // ============================
  'mini-universe': {
    name: 'MINI-UNIVERSE',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/MINI-UNIVERSE.pdf',
    category: 'pedal',
    tagline: {
      en: 'Compact Digital Reverb Pedal',
      zh: '紧凑型数字混响踏板'
    },
    description: {
      en: 'Infinite space in a tiny box. The MINI-UNIVERSE is a compact digital reverb pedal that transports your tone from intimate rooms to infinite halls. Multiple reverb algorithms, true bypass switching, and a sturdy metal housing deliver professional-grade ambiance on any pedalboard.',
      zh: '小小盒子中的无限空间。MINI-UNIVERSE 是一款紧凑型数字混响踏板，将你的音色从私密房间传送到无限大厅。多种混响算法、真旁路切换和坚固金属外壳，在任何效果板上提供专业级氛围。'
    },
    image: 'images/products/mini-universe-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '112(L) x 68(W) x 40(H) mm', zh: '112(L) x 68(W) x 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'About 236g', zh: 'About 236g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Premium Metal Design', zh: '简洁高档外观' },
        desc: { en: 'Clean, premium metal appearance design.', zh: '简洁、高档的金属外观设计。' }
      },
      {
        icon: 'reverb',
        color: 'cyan',
        title: { en: '9 Reverb Tones', zh: '9 种混响' },
        desc: { en: '9 reverb tones for most music styles and instruments.', zh: '共 9 种混响音色，适用于大部分音乐风格与乐器。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Warm & Dynamic', zh: '温暖动态' },
        desc: { en: 'Warm, natural tone with great dynamic response.', zh: '音色温暖自然，动态响应出色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'High-Performance DSP', zh: '高性能 DSP' },
        desc: { en: 'High-performance DSP for detailed reverb tails.', zh: '高性能数字信号处理器，混响声音细致入微。' }
      },
    ],
    highlights: [
      { label: { en: 'Modes', zh: '模式' }, value: '9' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' },
      { label: { en: 'Weight', zh: '重量' }, value: '160g' }
    ],
    gallery: ['images/productInfo/mini-universe-1.webp', 'images/productInfo/mini-universe-2.webp', 'images/productInfo/mini-universe-3.webp', 'images/productInfo/mini-universe-4.webp', 'images/productInfo/mini-universe-5.webp', 'images/productInfo/mini-universe-6.webp'],
    related: ['classic-delay', 'loop-ii', 'tank-g'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106114.html'
  },

  // ============================
  // GALAXIA (Reverb Pedal)
  // ============================
  'galaxia': {
    name: 'GALAXIA',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/Galaxia.pdf',
    category: 'pedal',
    tagline: {
      en: 'Reverb Effects Pedal',
      zh: '混响单块效果器'
    },
    description: {
      en: 'Nine reverb algorithms — explore every soundscape from the depths of space to the tape era. Rotate the central MODE knob to switch between ROOM, HALL, PLATE, SPRING, SHIMMER, CLOUD, BLOOM, SWELL and LOFI, each independently optimized with hot-swap and no signal interruption. The right HOLD footswitch triggers a Freeze module to hold a sustained reverb tail. Six precision knobs (DECAY, MIX, TONE, LEND, MOD, plus the central MODE), full stereo I/O, and dual DC 9V / USB-C power complete a studio-grade reverb in pedalboard size.',
      zh: '九种混响算法，探索从宇宙深处到磁带时代的每一处音景。旋动中央 MODE 旋钮，在 ROOM、HALL、PLATE、SPRING、SHIMMER、CLOUD、BLOOM、SWELL、LOFI 9 种精心调校的混响引擎间自由切换，每种算法独立优化、热切换无噪声中断。右侧 HOLD 冻结模块按下持续锁定音效，随心把控音色延续状态。六旋钮精密操控、立体声双通道接口、DC 9V / USB-C 双路供电，把录音室级混响装进单块体积。'
    },
    image: 'images/products/galaxia.webp',
    badge: { en: 'New', zh: '新品' },
    specs: [
      { param: { en: 'Type', zh: '产品类型' }, value: { en: 'Reverb Effects Pedal', zh: '混响单块效果器' } },
      { param: { en: 'Reverb Modes', zh: '混响算法' }, value: { en: '9 (ROOM / HALL / PLATE / SPRING / SHIMMER / CLOUD / BLOOM / SWELL / LOFI)', zh: '9 种（ROOM / HALL / PLATE / SPRING / SHIMMER / CLOUD / BLOOM / SWELL / LOFI）' } },
      { param: { en: 'Controls', zh: '旋钮' }, value: { en: 'DECAY, MODE, MIX, TONE, LEND, MOD', zh: 'DECAY、MODE、MIX、TONE、LEND、MOD' } },
      { param: { en: 'Footswitches', zh: '踩钉' }, value: { en: 'ON/OFF + HOLD (Freeze)', zh: 'ON/OFF + HOLD（冻结）' } },
      { param: { en: 'I/O', zh: '接口' }, value: { en: 'Stereo I/O — supports Mono In / Stereo Out and 2-in / 2-out', zh: '立体声双通道，支持 1 入 2 出 / 2 入 2 出' } },
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" TS jack × 2 (L/MONO · R/STEREO)', zh: '标准 1/4" TS 单声道接口 × 2（L/MONO · R/STEREO）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" TS jack × 2 (L/MONO · R/STEREO)', zh: '标准 1/4" TS 单声道接口 × 2（L/MONO · R/STEREO）' } },
      { param: { en: 'DC Power', zh: 'DC 供电' }, value: { en: 'DC 9V ≥ 300mA', zh: 'DC 9V ≥ 300mA' } },
      { param: { en: 'USB Power', zh: 'USB 供电' }, value: { en: 'USB Type-C, 5V ≥ 300mA', zh: 'USB Type-C，5V ≥ 300mA' } },
      { param: { en: 'Firmware', zh: '固件' }, value: { en: 'Online upgrade via PC', zh: '连接电脑在线升级' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '112(L) × 68(W) × 60(H) mm', zh: '112(L) × 68(W) × 60(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'Approx. 420g', zh: '约 420g' } }
    ],
    features: [
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '9 Reverb Algorithms', zh: '9 种混响算法' },
        desc: { en: 'ROOM, HALL, PLATE (EMT-140 inspired), SPRING (Fender-style), SHIMMER, CLOUD, BLOOM, SWELL and LOFI — each independently optimized with hot-swap and no signal interruption.', zh: 'ROOM、HALL、PLATE（EMT-140 风格）、SPRING（Fender 弹簧）、SHIMMER、CLOUD、BLOOM、SWELL、LOFI，每种算法独立优化，热切换无噪声中断。' }
      },
      {
        icon: 'controls',
        color: 'purple',
        title: { en: 'Freeze Module', zh: 'Freeze 冻结模块' },
        desc: { en: 'The right-hand HOLD footswitch holds the current reverb tail for as long as you press, then releases naturally on lift.', zh: '右侧 HOLD 踩钉触发即锁定当前湿声，踩下持续保持，松开自然慢慢复原。' }
      },
      {
        icon: 'knob',
        color: 'pink',
        title: { en: 'Six-Knob Precision Layout', zh: '六旋钮精密操控' },
        desc: { en: 'DECAY, MODE, MIX, TONE, LEND and MOD — every knob is tuned per algorithm to deliver its own parameter response curve.', zh: 'DECAY、MODE、MIX、TONE、LEND、MOD 六个旋钮均经过独立校准，在不同算法下呈现专属的参数响应曲线。' }
      },
      {
        icon: 'usb',
        color: 'green',
        title: { en: 'Stereo I/O & Dual Power', zh: '立体声 I/O 与双路供电' },
        desc: { en: 'Stereo dual-channel I/O for Mono-In/Stereo-Out or full 2-in/2-out routing; powered by DC 9V or USB-C 5V — plug in anywhere.', zh: '立体声双通道接口，支持 1 入 2 出与 2 入 2 出；DC 9V 标准电源与 USB-C 5V 双路供电，随时随地即插即用。' }
      }
    ],
    highlights: [
      { label: { en: 'Reverbs', zh: '混响' }, value: '9' },
      { label: { en: 'I/O', zh: '通道' }, value: 'Stereo' },
      { label: { en: 'Weight', zh: '重量' }, value: '420g' }
    ],
    gallery: ['images/productInfo/galaxia-1.webp', 'images/productInfo/galaxia-2.webp', 'images/productInfo/galaxia-3.webp', 'images/productInfo/galaxia-4.webp', 'images/productInfo/galaxia-5.webp', 'images/productInfo/galaxia-6.webp'],
    related: ['elemental-pro', 'classic-delay', 'elemental']
  },

  // ============================
  // ELEMENTAL PRO (Delay Pedal)
  // ============================
  'elemental-pro': {
    name: 'ELEMENTAL PRO',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/ELEMENTAL-PRO.pdf',
    category: 'pedal',
    tagline: {
      en: 'Stereo Digital Modeling Delay Effect Pedal',
      zh: '立体声数字建模延迟效果器'
    },
    description: {
      en: 'Powered by a high-performance DSP, ELEMENTAL PRO renders every detail of nine delay types — from warm analog tape feel to icy ICE pitch-shifted delay — with excellent dynamic response and signal-to-noise ratio. When a module is switched off, its natural tail fades gently, keeping tone transitions smooth. Two footswitches drive ON/OFF, PING-PONG stereo, TAP tempo and HOLD infinite hold; three routing modes (1-in/1-out, 1-in/2-out, 2-in/2-out) and dual DC 9V / USB-C power make it ready for any pedalboard or stage.',
      zh: 'ELEMENTAL PRO 搭载高性能数字信号处理芯片，以精密算法还原 9 种延迟效果的每一个细节——从温暖的模拟磁带质感，到冰晶般的 ICE 变调延迟，每种音色都具备优秀的动态响应与出色的信噪比。关闭模块时保留自然尾音慢慢淡出，让你的音色过渡更加流畅自然。双踩钉支持 ON/OFF、PING-PONG 立体声、TAP 打拍定速与 HOLD 无限延音；1 入 1 出 / 1 入 2 出 / 2 入 2 出三种接线模式与 DC 9V / USB-C 双路供电，适配各种效果板与演出场景。'
    },
    image: 'images/products/elemental-pro.webp',
    badge: { en: 'New', zh: '新品' },
    specs: [
      { param: { en: 'Model', zh: '产品型号' }, value: { en: 'ELEMENTAL PRO', zh: 'ELEMENTAL PRO' } },
      { param: { en: 'Type', zh: '产品类型' }, value: { en: 'Stereo Digital Modeling Delay Effect Pedal', zh: '立体声数字建模延迟效果器' } },
      { param: { en: 'Delay Types', zh: '延迟类型' }, value: { en: '9 (ANALOG / DUAL / DUCK / TREM / REVERSE / dTAPE / ICE / LOFI / PATTERN)', zh: '9 种（ANALOG / DUAL / DUCK / TREM / REVERSE / dTAPE / ICE / LOFI / PATTERN）' } },
      { param: { en: 'Delay Time', zh: '延迟时间' }, value: { en: '100–1200 ms (PATTERN: 100–1100 ms)', zh: '100–1200 ms（PATTERN 100–1100 ms）' } },
      { param: { en: 'Controls', zh: '旋钮' }, value: { en: 'TIME, TYPE, FEEDBACK, MIX, PARAM, MOD', zh: 'TIME、TYPE、FEEDBACK、MIX、PARAM、MOD' } },
      { param: { en: 'Footswitches', zh: '踩钉' }, value: { en: 'A (ON/OFF · MODE) + B (TAP · HOLD)', zh: 'A（ON/OFF · MODE）+ B（TAP · HOLD）' } },
      { param: { en: 'Modes', zh: '模式' }, value: { en: 'ON/OFF, PING-PONG (long press A), TAP tempo, HOLD infinite delay (long press B)', zh: 'ON/OFF、PING-PONG（长踩 A）、TAP 打拍定速、HOLD 无限延音（长踩 B）' } },
      { param: { en: 'Routing', zh: '接线模式' }, value: { en: '1-in/1-out (Mono), 1-in/2-out (Mono In / Stereo Out), 2-in/2-out (Full Stereo)', zh: '1 入 1 出（Mono）、1 入 2 出（Mono In / Stereo Out）、2 入 2 出（Full Stereo）' } },
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" TS jack × 2 (MONO + STEREO)', zh: '标准 1/4" TS 单声道接口 × 2（MONO + STEREO）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" TS jack × 2 (MONO + STEREO)', zh: '标准 1/4" TS 单声道接口 × 2（MONO + STEREO）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥ 300mA (center negative)', zh: 'DC 9V ≥ 300mA（内负外正）' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB-C 5V ≥ 300mA (5V 1A adapter recommended)', zh: 'USB-C 5V ≥ 300mA（建议 5V 1A 适配器）' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '112(L) × 68(W) × 40(H) mm', zh: '112(L) × 68(W) × 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'Approx. 242g', zh: '约 242g' } }
    ],
    features: [
      {
        icon: 'effects',
        color: 'purple',
        title: { en: '9 Delay Gears', zh: '9 种延迟类型' },
        desc: { en: 'ANALOG, DUAL, DUCK, TREM, REVERSE, dTAPE, ICE, LOFI and PATTERN — every gear has its own PARAM and MOD parameters for deep editing.', zh: 'ANALOG、DUAL、DUCK、TREM、REVERSE、dTAPE、ICE、LOFI、PATTERN，每种延迟均拥有独立 PARAM 与 MOD 参数，可深度调整。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'TAP + HOLD + PING-PONG', zh: 'TAP + HOLD + 乒乓' },
        desc: { en: 'Footswitch A long-press for PING-PONG stereo; footswitch B for TAP tempo and HOLD infinite hold — full performance control on two stomps.', zh: 'A 踩钉长按进入 PING-PONG 立体声模式，B 踩钉支持 TAP 打拍定速与 HOLD 无限延音——两颗踩钉覆盖核心演奏控制。' }
      },
      {
        icon: 'usb',
        color: 'pink',
        title: { en: 'Stereo Dual-Channel I/O', zh: '立体声双通道' },
        desc: { en: 'Three routing modes — 1-in/1-out, 1-in/2-out, 2-in/2-out — adapt to any pedalboard and recording setup.', zh: '三种接线模式：1 入 1 出、1 入 2 出、2 入 2 出，适配各种效果板与录音场景。' }
      },
      {
        icon: 'amp',
        color: 'green',
        title: { en: 'Dual Power', zh: '双供电方式' },
        desc: { en: 'DC 9V standard pedalboard power or USB-C 5V from a phone charger / power bank — plug in anywhere.', zh: 'DC 9V 效果器标准电源与 USB-C 移动充电头双路供电，随时随地即插即用。' }
      }
    ],
    highlights: [
      { label: { en: 'Delay Types', zh: '延迟' }, value: '9' },
      { label: { en: 'Max Time', zh: '最长延迟' }, value: '1200ms' },
      { label: { en: 'Weight', zh: '重量' }, value: '242g' }
    ],
    gallery: ['images/productInfo/elemental-pro-1.webp', 'images/productInfo/elemental-pro-2.webp', 'images/productInfo/elemental-pro-3.webp', 'images/productInfo/elemental-pro-4.webp', 'images/productInfo/elemental-pro-5.webp', 'images/productInfo/elemental-pro-6.webp', 'images/productInfo/elemental-pro-7.webp'],
    related: ['galaxia', 'classic-delay', 'elemental']
  },

  // ============================
  // 11. CLASSIC DELAY (Effects)
  // ============================
  'classic-delay': {
    name: 'Classic DELAY',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/CLASSIC-DELAY.pdf',
    category: 'pedal',
    tagline: {
      en: 'Warm Analog-Style Delay Pedal',
      zh: '温暖模拟风格延迟踏板'
    },
    description: {
      en: 'Warmth that echoes through time. Classic DELAY is a pure circuit analog delay pedal enhanced with two-band EQ and volume gain controls, allowing for precise tonal adjustments to achieve sweeter, warmer, and more natural sound dynamics. Up to 600ms of analog delay with TRUE BYPASS.',
      zh: '穿越时光的温暖回声。Classic DELAY 是纯电路模拟延迟踏板，配备双频段均衡器和音量增益控制，实现精确的音色调节，带来更甜美、更温暖、更自然的声音动态。最长 600ms 模拟延迟，配备真旁路。'
    },
    image: 'images/products/classic-delay-nobg.webp',
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '112(L) x 68(W) x 40(H) mm', zh: '112(L) x 68(W) x 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '230g', zh: '230g' } },
    ],
    features: [
      {
        icon: 'delay',
        color: 'purple',
        title: { en: 'Premium Metal Design', zh: '高档金属外观' },
        desc: { en: 'Laid-back, premium metal appearance design.', zh: '慵懒风格、高档的金属外观设计。' }
      },
      {
        icon: 'delay',
        color: 'cyan',
        title: { en: 'Classic Pure Analog', zh: '经典纯电路模拟' },
        desc: { en: 'A classic pure-circuit analog delay pedal.', zh: '经典的纯电路模拟延迟效果器。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: '~600ms Delay', zh: '约 600ms 延迟' },
        desc: { en: 'Up to ~600ms of delay, suitable for most music.', zh: '可提供约 600ms 的最大延迟，适合大部分音乐。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'Dual Power + True Bypass', zh: '双供电 + 真旁路' },
        desc: { en: '9V DC or USB (5V ≥300mA) power, with TRUE BYPASS.', zh: '支持 9V DC 或 USB（5V≥300mA）双供电，具备 TRUE BYPASS。' }
      },
    ],
    highlights: [
      { label: { en: 'Delay', zh: '延迟' }, value: '600ms' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' },
      { label: { en: 'Style', zh: '风格' }, value: 'Analog' }
    ],
    gallery: ['images/productInfo/classic-delay-1.webp', 'images/productInfo/classic-delay-2.webp', 'images/productInfo/classic-delay-3.webp', 'images/productInfo/classic-delay-4.webp', 'images/productInfo/classic-delay-5.webp'],
    related: ['classic-delay-pd18', 'mini-universe', 'loop-ii'],
    officialUrl: 'https://www.m-vave.com/productinfo/3636512.html'
  },

  // ============================
  // Classic DELAY PD18 (Effects)
  // ============================
  'classic-delay-pd18': {
    name: 'Classic DELAY PD18',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/%28PD18%29_CLASSIC%20DELAY.pdf',
    category: 'pedal',
    tagline: {
      en: 'Analog-Style Delay Pedal',
      zh: '模拟风格延迟踏板'
    },
    description: {
      en: 'Classic analog delay tones in a rugged, compact metal enclosure. The Classic DELAY PD18 delivers warm, saturated repeats with six-knob control — perfect for adding depth and space to any guitar tone.',
      zh: '坚固紧凑金属外壳中的经典模拟延迟音色。Classic DELAY PD18 通过六个旋钮控制，提供温暖饱满的回声，为任何吉他音色增添深度与空间感。'
    },
    image: 'images/products/classic-delay-v1-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'delay',
        color: 'cyan',
        title: { en: '530ms Max Delay', zh: '最大 530ms 延迟' },
        desc: { en: 'Provides up to 530ms of maximum delay time.', zh: '最大可提供约 530ms 的延迟时间。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'delay',
        color: 'pink',
        title: { en: 'Pure Analog Circuit', zh: '纯模拟电路' },
        desc: { en: 'Pure-circuit analog product for a sweeter, warmer and more natural timbre.', zh: '纯电路模拟产品，带来更甜美、温暖、自然的音色。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Delay' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' },
      { label: { en: 'Style', zh: '风格' }, value: 'Analog' }
    ],
    gallery: ['images/products/classic-delay-v1-nobg.webp'],
    related: ['classic-delay', 'mini-universe', 'dig-delay'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106114.html'
  },

  // ============================
  // 12. LOOP II (Effects)
  // ============================
  'loop-ii': {
    name: 'LOOP II',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/LOOP-2.pdf',
    category: 'pedal',
    tagline: {
      en: 'Advanced Looper Pedal',
      zh: '高级循环录音踏板'
    },
    description: {
      en: 'Layer. Build. Perform. The LOOP II stores 3 independent loops with up to 11 minutes total recording (5 min per loop), unlimited overdubs per loop, 3-gear speed changer, and WAV import/export via USB. One footswitch controls everything — record, play, overdub, undo, redo, and delete.',
      zh: '叠加。构建。表演。LOOP II 存储 3 个独立循环，总录音时长最长 11 分钟（每个循环最长 5 分钟），每个循环支持无限叠录，3 档变速，支持通过 USB 导入/导出 WAV 文件。一个脚踏开关控制所有功能——录音、播放、叠录、撤销、重做和删除。'
    },
    image: 'images/products/loop-ii-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Loops', zh: '储存档位' }, value: { en: '3', zh: '3 档' } },
      { param: { en: 'Total Recording', zh: '录音总时长' }, value: { en: 'Up to 11 minutes', zh: '最大 11 分钟' } },
      { param: { en: 'Single Loop', zh: '单档录音' }, value: { en: 'Up to 5 minutes', zh: '单档最大 5 分钟' } },
      { param: { en: 'Overdub', zh: '叠加次数' }, value: { en: 'Unlimited', zh: '无限' } },
      { param: { en: 'USB Type', zh: 'USB 接口' }, value: { en: 'USB-C', zh: 'USB-C' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '112(L) x 68(W) x 40(H) mm', zh: '112(L) x 68(W) x 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'About 217g', zh: '约 217g' } },
    ],
    features: [
      {
        icon: 'loop',
        color: 'purple',
        title: { en: '3 Loop Slots', zh: '3 档储存' },
        desc: { en: '3 loop storage slots, up to 11 minutes total recording.', zh: '3 档 LOOP 音轨储存位置，录音总时长最大 11 分钟。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Unlimited Overdub', zh: '无限叠加' },
        desc: { en: 'Each loop supports unlimited overdub, with unlimited undo/redo.', zh: '每档支持无限叠加录音，可无限次撤销/恢复。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'One-Footswitch Control', zh: '单脚踏控制' },
        desc: { en: 'One footswitch controls record, play, stop, overdub and undo/redo.', zh: '一个踩钉控制录音、播放、停止、叠加、撤销/恢复等功能。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Pre-Record + Speed', zh: '预备录音 + 倍速' },
        desc: { en: 'Pre-record button with sensitivity switch, plus 3-gear speed playback.', zh: '带预备录音按键与灵敏度切换，并提供 3 档倍速回放。' }
      },
      {
        icon: 'effects',
        color: 'purple',
        title: { en: 'USB-C WAV Transfer', zh: 'USB-C 传输' },
        desc: { en: 'Export/import standard WAV files to a computer over USB-C.', zh: '支持通过 USB-C 与电脑导出/导入标准 WAV 文件。' }
      },
    ],
    highlights: [
      { label: { en: 'Loops', zh: '循环' }, value: '3' },
      { label: { en: 'Record', zh: '录音' }, value: '11min' },
      { label: { en: 'Overdubs', zh: '叠录' }, value: '∞' }
    ],
    gallery: ['images/productInfo/loop-ii-1.webp', 'images/productInfo/loop-ii-2.webp', 'images/productInfo/loop-ii-3.webp', 'images/productInfo/loop-ii-4.webp', 'images/productInfo/loop-ii-5.webp'],
    related: ['classic-delay', 'mini-universe', 'mk-300'],
    officialUrl: 'https://www.m-vave.com/productinfo/1356694.html'
  },

  // ============================
  // 13. CHOCOLATE PLUS (Page Turner)
  // ============================
  'chocolate-plus': {
    name: 'CHOCOLATE PLUS',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/CUBE-TURNER/Chocolate-Plus.pdf',
    category: 'cat_control_pedals',
    tagline: {
      en: 'WIRELESS Control Pedal',
      zh: '蓝牙控制踏板'
    },
    description: {
      en: 'Chocolate Plus is a compact, portable MIDI foot controller with a built-in host interface for direct control of effects units. Smart APP setup, an advanced customization mode with switchable banks, and a clear command-feedback display make it powerful yet simple. Compatible with Windows, Mac, iOS and Android; a 2.5-hour charge lasts up to 12 hours.',
      zh: 'Chocolate Plus 是一款便携小巧的 MIDI 脚踏控制器，内置宿主接口可直接控制效果器。智能 APP 设置、可切换 Bank 的高级自定义模式，以及清晰的指令反馈屏，让它强大又易用。兼容 Windows、Mac、iOS、Android；充电 2.5 小时可使用长达 12 小时。'
    },
    image: 'images/products/chocolate-plus-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Portable MIDI foot controller', zh: '便携式 MIDI 脚踏控制器' } },
      { param: { en: 'Compatibility', zh: '兼容' }, value: { en: 'Windows / Mac / iOS / Android', zh: 'Windows / Mac / iOS / Android' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth / USB', zh: '蓝牙 / USB' } },
      { param: { en: 'Host Interface', zh: '宿主接口' }, value: { en: 'Built-in, controls effects units directly', zh: '内置，可直接控制效果器' } },
      { param: { en: 'Modes', zh: '模式' }, value: { en: 'Advanced custom mode with switchable banks', zh: '高级自定义模式，可切换 Bank' } },
      { param: { en: 'Display', zh: '显示' }, value: { en: 'Command-feedback display', zh: '指令反馈屏' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '300mAh (602030), 3.7V', zh: '300mAh（602030），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'Type-C', zh: 'Type-C' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: '2.5h charge / 12h use', zh: '充电 2.5h / 使用 12h' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '212(L) x 36(W) x 17(H) mm', zh: '212(L) x 36(W) x 17(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '280g', zh: '280g' } },
    ],
    features: [
      {
        icon: 'app',
        color: 'purple',
        title: { en: 'Built-in Host Interface', zh: '内置宿主接口' },
        desc: { en: 'Controls effects units directly, no computer required.', zh: '可直接控制效果器，无需电脑。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Advanced Custom Mode', zh: '高级自定义' },
        desc: { en: 'Switchable banks and keyboard-combo customization.', zh: '可切换 Bank，支持键盘组合键自定义。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: '2.5h Charge / 12h Use', zh: '2.5h 充电 / 12h 续航' },
        desc: { en: 'A 2.5-hour charge delivers up to 12 hours of use.', zh: '充电 2.5 小时，使用长达 12 小时。' }
      },
      {
        icon: 'led',
        color: 'pink',
        title: { en: 'Command-Feedback Display', zh: '屏幕指令反馈' },
        desc: { en: 'The display reflects the commands you send, clear and intuitive.', zh: '屏幕直接反馈发出的指令，直观清晰。' }
      },
    ],
    highlights: [
      { label: { en: 'Footswitchs', zh: '踩钉' }, value: '4' },
      { label: { en: 'Battery', zh: '续航' }, value: '40h+' },
      { label: { en: 'Wireless', zh: '无线' }, value: 'BT 5.0' }
    ],
    gallery: ['images/productInfo/chocolate-plus-1.webp', 'images/productInfo/chocolate-plus-2.webp', 'images/productInfo/chocolate-plus-3.webp', 'images/productInfo/chocolate-plus-4.webp'],
    colors: [
      {
        name: { en: 'Black', zh: '黑色' },
        swatch: '#1c1c1e',
        images: ['images/productInfo/chocolate-plus-1.webp', 'images/productInfo/chocolate-plus-2.webp', 'images/productInfo/chocolate-plus-3.webp', 'images/productInfo/chocolate-plus-4.webp']
      },
      {
        name: { en: 'Brown', zh: '棕色' },
        swatch: '#5a4433',
        images: ['images/productInfo/chocolate-plus-brown-1.webp', 'images/productInfo/chocolate-plus-brown-2.webp', 'images/productInfo/chocolate-plus-brown-3.webp', 'images/productInfo/chocolate-plus-brown-4.webp']
      }
    ],
    related: ['cube-turner-pro', 'smk25-ii', 'smk25'],
    officialUrl: 'https://www.m-vave.com/productinfo/1469977.html'
  },

  // ============================
  // 14. CUBE TURNER PRO (Page Turner)
  // ============================
  'cube-turner-pro': {
    name: 'CUBE TURNER PRO',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/CUBE-TURNER/Cube-Turner-PRO.pdf',
    category: 'cat_control_pedals',
    tagline: {
      en: 'Professional Wireless Page Turner',
      zh: '专业无线翻谱器'
    },
    description: {
      en: 'A wireless Bluetooth page-turner foot pedal for performers. CUBE TURNER PRO replaces computer arrow, Page Up/Down, space and enter keys, controls multimedia software, and handles Android screen swiping — all hands-free by foot. Seven switchable operation modes, dual footswitches, a TRS output, and up to 48 hours of battery life.',
      zh: '为演奏者打造的无线蓝牙翻页脚踏。CUBE TURNER PRO 可替代电脑方向键、Page Up/Down、空格与回车键，控制多媒体软件，还能实现安卓滑屏——全程脚控、解放双手。七种可切换操作模式、双踩钉、TRS 输出，满电续航长达 48 小时。'
    },
    image: 'images/products/cube-turner-pro.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Wireless page-turner foot controller', zh: '无线翻页脚踏控制器' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth', zh: '蓝牙 BT' } },
      { param: { en: 'Modes', zh: '操作模式' }, value: { en: '7 switchable modes', zh: '7 种可切换模式' } },
      { param: { en: 'Controls', zh: '控制' }, value: { en: 'Arrow / Page / Space / Enter / multimedia / Android swipe', zh: '方向键 / 翻页 / 空格回车 / 多媒体 / 安卓滑屏' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'TRS (1/4")', zh: 'TRS（1/4"）' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '300mAh (602030), 3.7V', zh: '300mAh（602030），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'Type-C', zh: 'Type-C' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'Up to 48 hours', zh: '长达 48 小时' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: 'Wireless Bluetooth', zh: '无线蓝牙' },
        desc: { en: 'Connects over Bluetooth — no cables to trip over.', zh: '蓝牙无线连接，告别线缆束缚。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: '7 Operation Modes', zh: '7 种模式' },
        desc: { en: 'Switch between seven foot-control modes for any workflow.', zh: '七种脚控模式自由切换，适配各种场景。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Keyboard & Media Control', zh: '键盘/多媒体控制' },
        desc: { en: 'Replaces arrow, page, space and enter keys and controls media software.', zh: '替代方向键、翻页键、空格回车，并控制多媒体软件。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '48h Battery', zh: '48 小时续航' },
        desc: { en: 'Up to 48 hours of continuous foot control per charge.', zh: '满电连续使用长达 48 小时。' }
      },
    ],
    highlights: [
      { label: { en: 'Weight', zh: '重量' }, value: '52g' },
      { label: { en: 'Battery', zh: '续航' }, value: '48h' },
      { label: { en: 'Design', zh: '设计' }, value: 'Pro' }
    ],
    gallery: ['images/productInfo/cube-turner-pro-1.webp', 'images/productInfo/cube-turner-pro-2.webp', 'images/productInfo/cube-turner-pro-3.webp', 'images/productInfo/cube-turner-pro-4.webp'],
    related: ['chocolate-plus', 'smk25-ii', 'smk-37-pro'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141694.html'
  },

  // ============================
  // 15. POCKET AMP (Multi-Effects)
  // ============================
  'pocket-amp': {
    name: 'POCKET AMP',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/SK17-Pocket-amp.pdf',
    category: 'multi',
    tagline: {
      en: 'Pocket-Sized Amp Simulator',
      zh: '口袋大小的音箱模拟器'
    },
    description: {
      en: 'Your entire amp collection fits in your pocket. The POCKET AMP is a miniature amp simulator and multi-effects processor with headphone output, making it the ultimate practice companion. Authentic amp tones, built-in effects, all powered by USB-C.',
      zh: '整个音箱收藏装进口袋。POCKET AMP 是一款微型音箱模拟器和综合效果器，配有耳机输出，是终极练习伴侣。真实的音箱音色、内置效果，全部由 USB-C 供电。'
    },
    image: 'images/products/pocket-amp-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Amp Models', zh: '音箱模型' }, value: { en: '9 classic amp models', zh: '9 种经典音箱模型' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: 'Chorus, Delay, Reverb', zh: '合唱、延迟、混响' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: '3.5mm headphone jack', zh: '3.5mm 耳机接口' } },
      { param: { en: 'Input', zh: '输入' }, value: { en: '1/4" (6.35mm) guitar jack', zh: '1/4"（6.35mm）吉他接口' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: 'USB-C rechargeable', zh: 'USB-C 可充电' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Approx. 7 hours (5h full charge)', zh: '约 7 小时续航（充电约 5 小时）' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '80g', zh: '80g' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '9 Amp Models', zh: '9 种音箱模型' },
        desc: { en: 'From crystal cleans to crushing high-gain — every tone in your pocket.', zh: '从水晶般的清音到碾压式高增益 — 每种音色尽在口袋中。' }
      },
      {
        icon: 'headphone',
        color: 'cyan',
        title: { en: 'Silent Practice', zh: '静音练习' },
        desc: { en: 'Headphone output lets you practice anywhere without disturbing others.', zh: '耳机输出让你在任何地方练习而不打扰他人。' }
      },
      {
        icon: 'aux',
        color: 'green',
        title: { en: 'Jam Along', zh: '跟弹伴奏' },
        desc: { en: '3.5mm aux input to play along with your favorite songs.', zh: '3.5mm 辅助输入，跟着你喜欢的歌曲一起弹奏。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Ultra-Portable', zh: '超便携' },
        desc: { en: 'At just 80g, it clips right onto your guitar.', zh: '仅 80g，直接夹在吉他上。' }
      }
    ],
    highlights: [
      { label: { en: 'Amps', zh: '音箱' }, value: '9' },
      { label: { en: 'Weight', zh: '重量' }, value: '80g' },
      { label: { en: 'Battery', zh: '续航' }, value: '~7h' }
    ],
    gallery: ['images/productInfo/pocket-amp-1.webp', 'images/productInfo/pocket-amp-2.webp', 'images/productInfo/pocket-amp-3.webp', 'images/productInfo/pocket-amp-4.webp', 'images/productInfo/pocket-amp-5.webp', 'images/productInfo/pocket-amp-6.webp', 'images/productInfo/pocket-amp-7.webp'],
    related: ['tank-g', 'mk-300', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/3556655.html'
  },

  // ============================
  // POCKET COMBO (Speaker / Multi-Effects)
  // ============================
  'pocket-combo': {
    name: 'POCKET COMBO',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/ODM/Pocket-CAB.pdf',
    category: 'speaker',
    tagline: {
      en: 'Pocket Effect + Rechargeable Full-Range Speaker',
      zh: '口袋效果器 + 可充电全频音箱'
    },
    description: {
      en: 'POCKET COMBO packs a full-range speaker, amplifier, acoustic enclosure and rechargeable battery into one palm-sized box. ANN modeling technology replicates third-party tones with up to 90% accuracy and supports loading external ANN tones, while 80 factory presets and 6 fully chainable effects modules — Noise Gate, Boost, Compressor, 20 amp sims, 3-band EQ, 7 modulations, 5 delays, 6 reverbs and 20 IR cab sims — cover everything from clean practice to crushing high-gain. Bluetooth playback, headphone monitoring, mobile OTG recording and a USB audio interface make it a complete creation hub. Plug it straight into any desktop effects unit or dual-channel audio device — no extras needed. With its compact, all-in-one rechargeable design it is ideal for teaching, small gigs, outdoor practice and travel.',
      zh: 'POCKET COMBO 将全频扬声器、功放、声学箱体与可充电锂电池集成于掌心大小的一体机中。ANN 拟真建模技术可还原第三方音色高达 90% 的相似度，并支持加载第三方 ANN 音色；内置 80 个出厂预设、6 个可自由调整信号链的效果模块（噪声门、Boost、压缩器、20 种音箱模拟、三段 EQ、7 种调制、5 种延迟、6 种混响、20 种 IR 箱体模拟），从纯净练习到高增益失真一应俱全。支持蓝牙播放、耳机监听、手机 OTG 录音以及 USB 声卡，构成完整的创作中枢。可直接接入任意桌面效果器或双通道音频设备，无需额外配件。一体化可充电设计，紧凑便携，适合教学、小型演出、户外练习与旅行。'
    },
    image: 'images/products/pocket-combo.webp',
    badge: { en: 'New', zh: '新品' },
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/8" AUX stereo jack (TRS)', zh: '标准 1/8" AUX 立体声接口（TRS）' } },
      { param: { en: 'Input Frequency', zh: '输入频率' }, value: { en: '20Hz–20KHz', zh: '20Hz–20KHz' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '44.1KHz 24bit', zh: '44.1KHz 24bit' } },
      { param: { en: 'Dimensions (L×W×H)', zh: '尺寸（长×宽×高）' }, value: { en: '93(L) × 71(W) × 83(H) mm', zh: '93(L) × 71(W) × 83(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '900g', zh: '900g' } },
      { param: { en: 'Speaker', zh: '扬声器' }, value: { en: '4Ω 10W full-range speaker', zh: '4Ω 10W 全频扬声器' } },
      { param: { en: 'Max SPL', zh: '最大声压级' }, value: { en: '87 ± 3dB SPL@1M', zh: '87 ± 3dB SPL@1M' } },
      { param: { en: 'Frequency Range', zh: '频率范围' }, value: { en: '0–20000Hz', zh: '0–20000Hz' } },
      { param: { en: 'Enclosure', zh: '音箱壳体' }, value: { en: 'Sealed dual passive radiator design (F0≈73Hz)', zh: '封闭式双被动板设计（F0≈73Hz）' } },
      { param: { en: 'Power Amplifier', zh: '功率放大器' }, value: { en: 'Class-D 10W', zh: 'D 类 10W' } },
      { param: { en: 'Headphone Output Impedance', zh: '耳机输出阻抗' }, value: { en: '16–32Ω', zh: '16–32Ω' } },
      { param: { en: 'Power', zh: '电源' }, value: { en: '5V, 2A', zh: '5V，2A' } },
      { param: { en: 'Speaker Rated Power', zh: '音箱额定功率' }, value: { en: '10W', zh: '10W' } },
      { param: { en: 'Max Loudness', zh: '最大响度' }, value: { en: '90dB ± 3dB', zh: '90dB ± 3dB' } },
      { param: { en: 'Battery Type', zh: '电池型号规格' }, value: { en: '18500-2S', zh: '18500-2S' } },
      { param: { en: 'Battery Capacity', zh: '电池容量' }, value: { en: '1600mAh', zh: '1600mAh' } },
      { param: { en: 'Battery Nominal Voltage', zh: '电池标称电压' }, value: { en: '7.4V', zh: '7.4V' } },
      { param: { en: 'Battery Life', zh: '电池续航' }, value: { en: 'Approx. 7 hours', zh: '约 7 小时' } },
      { param: { en: 'Operating Current', zh: '工作电流' }, value: { en: '≥110mA', zh: '≥110mA' } },
      { param: { en: 'In the Box', zh: '出厂附带' }, value: { en: '3.5mm audio cable ×1, charging cable ×2', zh: '3.5mm 音频线 ×1，充电线 ×2' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: 'ANN Modeling · 90% Accuracy', zh: 'ANN 拟真 · 90% 相似度' },
        desc: { en: 'ANN technology replicates third-party tones with up to 90% accuracy and supports loading external ANN tones — your favorite amps and pedals, faithfully in your pocket.', zh: 'ANN 拟真建模技术可还原第三方音色高达 90% 的相似度，并支持加载第三方 ANN 音色，把你喜爱的音箱与效果器忠实装进口袋。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '80 Presets · 6 FX Modules', zh: '80 预设 · 6 效果模块' },
        desc: { en: '80 fully editable, user-overwritable factory presets and 6 effects modules with an adjustable signal chain: Noise Gate, Boost, Compressor, 20 amp sims, 3-band EQ, 7 modulations, 5 delays, 6 reverbs and 20 IR cab sims.', zh: '80 个出厂预设可自由编辑与覆盖，6 个效果模块信号链可调：噪声门、Boost、压缩器、20 种音箱模拟、三段 EQ、7 种调制、5 种延迟、6 种混响、20 种 IR 箱体模拟。' }
      },
      {
        icon: 'audio',
        color: 'green',
        title: { en: 'Bluetooth · OTG · USB Audio', zh: '蓝牙 · OTG · USB 声卡' },
        desc: { en: 'Bluetooth playback, headphone monitoring, mobile OTG recording and a USB audio interface — a complete creation hub for practice, recording and jamming along.', zh: '支持蓝牙播放、耳机监听、手机 OTG 录音以及 USB 声卡，构成练习、录音、跟弹一体的完整创作中枢。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'All-in-One · Rechargeable', zh: '一体化 · 可充电' },
        desc: { en: 'Battery, amplifier, speaker and acoustic enclosure in one box — plug directly into any desktop effects unit or dual-channel audio device, no extras needed. Compact and rechargeable, ideal for teaching, small gigs, outdoor practice and travel.', zh: '电池、功放、扬声器与声学箱体集成于一体，可直接接入任意桌面效果器或双通道音频设备，无需额外配件。紧凑可充电，适合教学、小型演出、户外练习与旅行。' }
      }
    ],
    highlights: [
      { label: { en: 'Speaker', zh: '扬声器' }, value: '10W' },
      { label: { en: 'Presets', zh: '预设' }, value: '80' },
      { label: { en: 'Battery', zh: '续航' }, value: '7h' }
    ],
    gallery: [
      'images/productInfo/pocket-combo-1.webp',
      'images/productInfo/pocket-combo-2.webp',
      'images/productInfo/pocket-combo-3.webp',
      'images/productInfo/pocket-combo-4.webp',
      'images/productInfo/pocket-combo-5.webp',
      'images/productInfo/pocket-combo-6.webp'
    ],
    related: ['pocket-amp', 'tank-g', 'mk-300']
  },

  // ========================================
  // REMAINING PRODUCTS (Basic Data)
  // ========================================

  'smk25-mini': {
    name: 'SMK25 Mini',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMK-25-MINI.pdf',
    category: 'midi',
    tagline: { en: 'Compact 25-Key Wireless MIDI Keyboard', zh: '紧凑 25 键无线 MIDI 键盘' },
    description: { en: 'The most portable MIDI keyboard in the M-VAVE lineup. Mini-size keys with full MIDI functionality, WIRELESS wireless connectivity, and a built-in rechargeable battery — ready to play anywhere.', zh: 'M-VAVE 产品线中最便携的 MIDI 键盘。迷你尺寸琴键，完整 MIDI 功能，蓝牙无线连接，内置可充电电池——随时随地即可演奏。' },
    image: 'images/products/smk25-mini.webp',
    badge: null,
    specs: [
      { param: { en: 'Keys', zh: '琴键' }, value: { en: '25 mini velocity-sensitive keys', zh: '25 个迷你力度感应琴键' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'WIRELESS / USB-C MIDI', zh: '蓝牙 / USB-C MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: 'Built-in rechargeable battery, USB-C', zh: '内置可充电电池，USB-C 充电' } }
    ],
    features: [
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'WIRELESS Wireless', zh: '蓝牙无线' },
        desc: { en: 'Wireless WIRELESS connection to all major DAWs on any platform.', zh: '蓝牙无线连接所有主流平台的 DAW。' }
      },
      {
        icon: 'keyboard',
        color: 'cyan',
        title: { en: '25 Mini Keys', zh: '25 个迷你琴键' },
        desc: { en: 'Compact mini-size velocity-sensitive keys — maximum portability without sacrificing playability.', zh: '紧凑迷你尺寸力度感应琴键——最大便携性，不牺牲演奏性。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Ultra Portable', zh: '超便携' },
        desc: { en: 'The smallest MIDI keyboard in the lineup, built for musicians on the go.', zh: '产品线中最小的 MIDI 键盘，专为行走中的音乐人打造。' }
      }
    ],
    highlights: [
      { label: { en: 'Keys', zh: '琴键' }, value: '25' },
      { label: { en: 'Size', zh: '尺寸' }, value: 'Mini' },
      { label: { en: 'Wireless', zh: '无线' }, value: 'BT' }
    ],
    gallery: ['images/productInfo/smk25-mini-1.webp', 'images/productInfo/smk25-mini-2.webp', 'images/productInfo/smk25-mini-3.webp', 'images/productInfo/smk25-mini-4.webp', 'images/productInfo/smk25-mini-5.webp'],
    related: ['smk25', 'smk25-ii'],
    officialUrl: 'https://www.m-vave.com/productinfo/1041269.html'
  },

  'smc-pad-pocket': {
    name: 'SMC-PAD Pocket',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MIDI-KEYBOARD/SMC-PAD-POCKET.pdf',
    category: 'midi',
    tagline: { en: 'Ultra-Portable Wireless MIDI Pad Controller', zh: '超便携无线 MIDI 打击垫控制器' },
    description: { en: 'On-the-go beat making in the palm of your hand. 16 velocity-sensitive pads, WIRELESS wireless, and a rechargeable battery in a pocket-sized form factor. Clip it to your bag and trigger beats, samples, or clips anywhere.', zh: '掌中即兴节拍创作。16 个力度感应打击垫、蓝牙无线，可充电电池，口袋尺寸。夹在包上，随时随地触发节拍、采样或片段。' },
    image: 'images/products/smc-pad-pocket-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Pads', zh: '打击垫' }, value: { en: '16 RGB back-lit pads with velocity & aftertouch', zh: '16 个 RGB 背光打击垫，支持力度感应与触后' } },
      { param: { en: 'Pad Banks', zh: '打击垫组' }, value: { en: '7 banks × 16 pads (112 MIDI notes)', zh: '7 组 × 16 个打击垫（112 个 MIDI 音符）' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'BLE MIDI / USB-C MIDI', zh: 'BLE MIDI / USB-C MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'Windows, macOS, iOS, Android', zh: 'Windows、macOS、iOS、Android' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '780mAh Li-ion', zh: '780mAh 锂电池' } },
      { param: { en: 'Dimensions', zh: '尺寸' }, value: { en: '105 x 105 x 16 mm', zh: '105 x 105 x 16 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '130g', zh: '130g' } }
    ],
    features: [
      {
        icon: 'pads',
        color: 'pink',
        title: { en: '16 RGB Pads', zh: '16 个 RGB 打击垫' },
        desc: { en: '16 RGB back-lit pads with velocity and aftertouch for finger drumming, sample triggering, and clip launching.', zh: '16 个 RGB 背光打击垫，支持力度与触后感应，用于指鼓演奏、采样触发和片段启动。' }
      },
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'Wireless WIRELESS', zh: '无线蓝牙' },
        desc: { en: 'Cable-free connection to any device for fully wireless beat creation.', zh: '无线连接任意设备，完全无线节拍创作。' }
      },
      {
        icon: 'compact',
        color: 'cyan',
        title: { en: 'Pocket Size', zh: '口袋尺寸' },
        desc: { en: 'Ultracompact design that clips to your bag — beats always in your pocket.', zh: '超紧凑设计，可夹在包上——节拍随身携带。' }
      }
    ],
    highlights: [
      { label: { en: 'Pads', zh: '打击垫' }, value: '16' },
      { label: { en: 'Wireless', zh: '无线' }, value: 'BT' },
      { label: { en: 'Size', zh: '尺寸' }, value: 'Pocket' }
    ],
    gallery: ['images/productInfo/smc-pad-pocket-1.webp', 'images/productInfo/smc-pad-pocket-2.webp', 'images/productInfo/smc-pad-pocket-3.webp', 'images/productInfo/smc-pad-pocket-4.webp', 'images/productInfo/smc-pad-pocket-5.webp'],
    related: ['smc-pad', 'smk25-ii'],
    officialUrl: 'https://www.m-vave.com/productinfo/1356772.html'
  },

  'cube-baby': {
    name: 'CUBE BABY',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/CUBE-BABY.pdf',
    category: 'multi',
    tagline: { en: 'Ultra-Compact Multi-Effects Processor with IR', zh: '超紧凑综合效果器，内置 IR 加载' },
    description: {
      en: 'CUBE BABY is a portable guitar processor with amp modeling and built-in effects. It chains an amp module, modulation, delay, reverb and a 9-slot IR cabinet section (8 classic IRs), with PRESET, LIVE and EDIT modes and A/B/C footswitches. Bluetooth audio and phone recording are built in, and the rechargeable battery runs about 6 hours.',
      zh: 'CUBE BABY 是一款便携吉他效果处理器，集音箱模拟与多种内置效果于一身。串联箱头模块、调制、延时、混响与 9 档 IR 箱体模拟（含 8 种经典 IR），提供 PRESET、LIVE、EDIT 三种模式与 A/B/C 脚踏。内置蓝牙音频与手机录音功能，可充电电池续航约 6 小时。'
    },
    image: 'images/products/cube-baby.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Portable guitar amp & effects', zh: '便携吉他音箱模拟效果器' } },
      { param: { en: 'Effect Chain', zh: '效果链' }, value: { en: 'Amp, Modulation, Delay, Reverb, IR Cab', zh: '箱头、调制、延时、混响、IR 箱体' } },
      { param: { en: 'IR Cabinets', zh: 'IR 箱体' }, value: { en: '9 slots (8 classic IRs, 1 off)', zh: '9 档（8 种经典 IR + 1 关闭）' } },
      { param: { en: 'Modes', zh: '模式' }, value: { en: 'PRESET / LIVE / EDIT', zh: 'PRESET / LIVE / EDIT' } },
      { param: { en: 'Footswitch', zh: '脚踏' }, value: { en: 'A / B / C', zh: 'A / B / C' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth + phone recording', zh: '蓝牙 + 手机录音' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in, ~6h use', zh: '内置，续航约 6 小时' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB 5V/2A', zh: 'USB 5V/2A' } },
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: 'Amp + Effects Chain', zh: '箱头 + 效果链' },
        desc: { en: 'Amp module with modulation, delay, reverb and IR cabinets.', zh: '箱头模块串联调制、延时、混响与 IR 箱体。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'PRESET / LIVE / EDIT', zh: '三种模式' },
        desc: { en: 'Three modes with A/B/C footswitches for any workflow.', zh: '三种模式配 A/B/C 脚踏，适配各种场景。' }
      },
      {
        icon: 'app',
        color: 'green',
        title: { en: 'BT + Phone Recording', zh: '蓝牙 + 手机录音' },
        desc: { en: 'Bluetooth audio and direct phone recording built in.', zh: '内置蓝牙音频与手机直录功能。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '~6h Battery', zh: '续航约 6h' },
        desc: { en: 'Rechargeable battery runs about 6 hours.', zh: '可充电电池续航约 6 小时。' }
      },
    ],
    highlights: [
      { label: { en: 'IR', zh: 'IR' }, value: 'Yes' },
      { label: { en: 'Effects', zh: '效果' }, value: 'Multi' }
    ],
    gallery: ['images/productInfo/cube-baby-1.webp', 'images/productInfo/cube-baby-2.webp', 'images/productInfo/cube-baby-3.webp', 'images/productInfo/cube-baby-4.webp', 'images/productInfo/cube-baby-5.webp', 'images/productInfo/cube-baby-6.webp'],
    related: ['tank-g', 'mk-300'],
    officialUrl: 'https://www.m-vave.com/productinfo/1487820.html'
  },

  'mini-x': {
    name: 'MINI-X',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/MINI-X.pdf',
    category: 'multi',
    tagline: { en: 'Guitar Headphone Amp with 9 Amp Tones & WIRELESS', zh: '吉他耳机放大器，9 种箱头音色 + 蓝牙' },
    description: {
      en: 'MINI-X is a plug-in headphone amp for electric guitar. It offers 9 amp simulations from clean to overdrive to heavy metal, three modulation effects (chorus, phaser, tremolo) and three ambience effects (reverb, delay, reverb+delay), plus Bluetooth and a 3.5mm headphone output — with around 5 hours of battery life for silent practice anywhere.',
      zh: 'MINI-X 是一款插琴式电吉他耳放效果器。提供 9 种音箱模拟，从清音、过载到重金属，配合三种调制效果（合唱、相位、颤音）与三种氛围效果（混响、延时、混响+延时），支持蓝牙与 3.5mm 耳机输出，满电续航约 5 小时，随时随地静音练习。'
    },
    image: 'images/products/mini-x-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Amp Tones', zh: '音色' }, value: { en: '9 amplifier simulation tones', zh: '9 种音箱模拟音色' } },
      { param: { en: 'Modulation Effects', zh: '调制效果' }, value: { en: 'Chorus, Phase, Tremolo', zh: '合唱、移相、颤音' } },
      { param: { en: 'Ambient Effects', zh: '氛围效果' }, value: { en: 'Reverb, Delay, Reverb+Delay', zh: '混响、延迟、混响+延迟' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '44.1kHz / 24-bit', zh: '44.1kHz / 24 位' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'Up to 5 hours', zh: '最长 5 小时' } },
      { param: { en: 'Charging Time', zh: '充电时长' }, value: { en: 'About 4 hours', zh: '约 4 小时' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '65g', zh: '65g' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '9 Amp Simulations', zh: '9 种音箱模拟' },
        desc: { en: 'From clean to overdrive to heavy metal tones.', zh: '从清音、过载到重金属音色。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'MOD + SPACE Effects', zh: '调制 + 氛围效果' },
        desc: { en: 'Chorus, phaser, tremolo plus reverb, delay and reverb+delay.', zh: '合唱、相位、颤音，加混响、延时、混响+延时。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Plug-in Headphone Amp', zh: '插琴式耳放' },
        desc: { en: 'Plugs straight into your guitar with a 3.5mm headphone out.', zh: '直接插入吉他，配 3.5mm 耳机输出。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '5h Battery + BT', zh: '5h 续航 + 蓝牙' },
        desc: { en: 'About 5 hours of battery life with Bluetooth audio.', zh: '满电续航约 5 小时，支持蓝牙音频。' }
      },
    ],
    gallery: ['images/productInfo/mini-x-1.webp', 'images/productInfo/mini-x-2.webp', 'images/productInfo/mini-x-3.webp', 'images/productInfo/mini-x-4.webp', 'images/productInfo/mini-x-5.webp', 'images/productInfo/mini-x-6.webp'],
    related: ['sp100', 'pocket-amp', 'mini-amp'],
    officialUrl: 'https://www.m-vave.com/productinfo/3556720.html'
  },

  'sp100': {
    name: 'SP100',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/SP100/SP100.pdf',
    category: 'multi',
    tagline: {
      en: 'Electric Guitar Amp with 9 Tones & 6 Effects',
      zh: '电吉他音箱，9 种音色 + 6 种效果'
    },
    description: {
      en: 'A complete guitar amp in one rechargeable package. The SP100 offers 9 switchable tones and 6 built-in effects (chorus, phase, tremolo, reverb, delay, reverb+delay), wireless WIRELESS for streaming accompaniment, a USB-C port for recording, and a built-in rechargeable battery for outdoor use.',
      zh: '一台完整的可充电吉他音箱。SP100 提供 9 种可切换音色和 6 种内置效果（合唱、移相、颤音、混响、延迟、混响+延迟），支持蓝牙无线播放伴奏，配备 USB-C 录音接口和内置可充电电池，可户外使用。'
    },
    image: 'images/products/sp100-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Tones', zh: '音色' }, value: { en: '9 switchable tones', zh: '9 种可切换音色' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: 'Chorus, Phase, Tremolo, Reverb, Delay, Reverb+Delay (6 total)', zh: '合唱、移相、颤音、混响、延迟、混响+延迟（共 6 种）' } },
      { param: { en: 'Speaker', zh: '扬声器' }, value: { en: 'Mono full-range, 4Ω, max 10W', zh: '单声道全频扬声器，4Ω，最大 10W' } },
      { param: { en: 'Power Amplifier', zh: '功放' }, value: { en: 'Class D, 10W output (f0 ≈ 158Hz)', zh: 'D 类功放，10W 输出（f0 ≈ 158Hz）' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '44.1kHz / 24-bit', zh: '44.1kHz / 24 位' } },
      { param: { en: 'WIRELESS', zh: '蓝牙' }, value: { en: 'Wireless BT audio for accompaniment playback', zh: '无线蓝牙音频，用于伴奏播放' } },
      { param: { en: 'I/O', zh: '接口' }, value: { en: '6.5mm guitar input, 3.5mm headphone, 3.5mm AUX, USB-C', zh: '6.5mm 吉他输入、3.5mm 耳机、3.5mm AUX、USB-C' } },
      { param: { en: 'Battery Life', zh: '电池续航' }, value: { en: 'About 8 hours', zh: '约 8 小时' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '1128g', zh: '1128g' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '9 Switchable Tones', zh: '9 种可切换音色' },
        desc: { en: '9 guitar amp tones covering clean, crunch, and high-gain styles.', zh: '9 种吉他音箱音色，涵盖清音、过载和高增益风格。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '6 Built-In Effects', zh: '6 种内置效果' },
        desc: { en: 'Modulation and ambient effects including chorus, phaser, tremolo, reverb, and delay.', zh: '调制和氛围效果，包括合唱、移相、颤音、混响和延迟。' }
      },
      {
        icon: 'WIRELESS',
        color: 'green',
        title: { en: 'WIRELESS Streaming', zh: '蓝牙播放' },
        desc: { en: 'Connect phone or computer via WIRELESS to play along with backing tracks.', zh: '通过蓝牙连接手机或电脑，跟随伴奏演奏。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'Rechargeable Battery', zh: '可充电电池' },
        desc: { en: 'Built-in rechargeable battery for outdoor and untethered practice.', zh: '内置可充电电池，支持户外和无线练习。' }
      }
    ],
    highlights: [
      { label: { en: 'Tones', zh: '音色' }, value: '9' },
      { label: { en: 'Effects', zh: '效果' }, value: '6' },
      { label: { en: 'Wireless', zh: '无线' }, value: 'BT' }
    ],
    gallery: ['images/productInfo/sp100-1.webp', 'images/productInfo/sp100-2.webp', 'images/productInfo/sp100-3.webp', 'images/productInfo/sp100-4.webp', 'images/productInfo/sp100-5.webp', 'images/productInfo/sp100-6.webp'],
    related: ['loop-ii', 'mk-300'],
    officialUrl: 'https://www.m-vave.com/productinfo/3556661.html'
  },

  'mk-20': {
    name: 'MK-20',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/MK-20.pdf',
    category: 'multi',
    tagline: { en: 'Professional Multi-Effects Floor Processor', zh: '专业多效果器地板处理器' },
    description: {
      en: 'Powered by ANN (Audio Neural Net) modelling technology. 120 preamp models, 10 effects modules with 320+ effect types, 150 editable presets, and a fully customizable signal chain. Built-in 20-second looper, 128 drum variations, and WIRELESS for BT audio, BLE MIDI, and APP transfer. Up to 8 hours battery life.',
      zh: '搭载 ANN（音频神经网络）建模技术。120 个前置放大器模型、10 个效果模块 320+ 种效果类型、150 个可编辑预设，信号链完全可定制。内置 20 秒循环录音和 128 种鼓机变奏，蓝牙支持 BT 音频、BLE MIDI 和 APP 数据传输。续航最长 8 小时。'
    },
    image: 'images/products/mk-20-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Amp Models', zh: '放大器模型' }, value: { en: '120 preamp models (85 guitar + 30 bass + 5 acoustic)', zh: '120 个前置放大器模型（85 吉他 + 30 贝斯 + 5 木吉他）' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: '10 modules, 320+ effect types', zh: '10 个模块，320+ 种效果类型' } },
      { param: { en: 'Presets', zh: '预设' }, value: { en: '150 editable user presets', zh: '150 个可编辑用户预设' } },
      { param: { en: 'CAB', zh: 'CAB' }, value: { en: '100 CAB models + custom IR loading', zh: '100 个 CAB 模型 + 自定义 IR 加载' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '24-bit / 48KHz', zh: '24-bit / 48KHz' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in rechargeable, ~8+ hours', zh: '内置可充电，约 8+ 小时' } },
      { param: { en: 'Wireless', zh: '无线' }, value: { en: 'WIRELESS (BT audio + BLE MIDI + APP)', zh: '蓝牙（BT 音频 + BLE MIDI + APP）' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '120 ANN Amp Models', zh: '120 个 ANN 放大器模型' },
        desc: { en: 'Audio Neural Net modelling delivers authentic tube amp feel across 120 guitar, bass, and acoustic preamp models.', zh: '音频神经网络建模带来真实电子管音色，含 120 个吉他、贝斯和木吉他前置放大器模型。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '320+ Effects', zh: '320+ 种效果' },
        desc: { en: '10 editable effects modules with 320+ types and fully configurable signal chain order.', zh: '10 个可编辑效果模块，320+ 种效果类型，信号链顺序完全可配置。' }
      },
      {
        icon: 'WIRELESS',
        color: 'green',
        title: { en: 'WIRELESS Connectivity', zh: '蓝牙连接' },
        desc: { en: 'BT music playback, BLE MIDI control, and APP data transfer all built in.', zh: 'BT 音乐播放、BLE MIDI 控制和 APP 数据传输全部内置。' }
      },
      {
        icon: 'loop',
        color: 'orange',
        title: { en: 'Looper + Drum Machine', zh: '循环录音 + 鼓机' },
        desc: { en: '20-second looper and 128 drum variations built in for practice and live performance.', zh: '内置 20 秒循环录音和 128 种鼓机变奏，适合练习和现场演出。' }
      }
    ],
    highlights: [
      { label: { en: 'Amp Models', zh: '放大器' }, value: '120' },
      { label: { en: 'Effects', zh: '效果' }, value: '320+' },
      { label: { en: 'Battery', zh: '续航' }, value: '8h+' }
    ],
    gallery: ['images/productInfo/mk-20-1.webp', 'images/productInfo/mk-20-2.webp', 'images/productInfo/mk-20-3.webp', 'images/productInfo/mk-20-4.webp', 'images/productInfo/mk-20-5.webp', 'images/productInfo/mk-20-6.webp'],
    related: ['mk-300', 'tank-g'],
    officialUrl: 'https://www.m-vave.com/productinfo/3555316.html'
  },

  'annblack-box': {
    name: 'ANNBLACK BOX',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/BLACKBOX.pdf',
    category: 'multi',
    tagline: { en: 'Portable All-In-One Guitar/Bass Effects Processor', zh: '便携式一体化吉他/贝斯效果器' },
    description: {
      en: 'Portable guitar/bass effects processor with 80 editable presets, 20 preamp models, up to 20 IR CAB slots, and a fully customizable effects chain. Built-in rechargeable battery lasts up to 10 hours. Supports WIRELESS audio, earphone monitoring, and works as a USB sound card or smartphone recording interface.',
      zh: '便携式吉他/贝斯效果器，80 个可编辑预设、20 个前置放大器模型、最多 20 个 IR CAB 插槽，效果链完全可定制。内置可充电电池续航最长 10 小时。支持蓝牙音频、耳机监听，可用作 USB 声卡或智能手机录音接口。'
    },
    image: 'images/products/annblack-box-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Presets', zh: '预设' }, value: { en: '80 editable presets', zh: '80 个可编辑预设' } },
      { param: { en: 'Amp Models', zh: '放大器模型' }, value: { en: '20 preamp models', zh: '20 个前置放大器模型' } },
      { param: { en: 'IR CAB Slots', zh: 'IR CAB 插槽' }, value: { en: '20 IR CAB slots', zh: '20 个 IR CAB 插槽' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: 'Noise Gate, Boost, Compressor, 3-band EQ, 7 Mod, 5 Delay, 6 Reverb', zh: '噪音门、增益、压缩、3 段 EQ、7 种调制、5 种延迟、6 种混响' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in rechargeable, ~10 hours', zh: '内置可充电，约 10 小时' } },
      { param: { en: 'Wireless', zh: '无线' }, value: { en: 'WIRELESS audio', zh: '蓝牙音频' } }
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '20 Preamp Models', zh: '20 个前置放大器模型' },
        desc: { en: '20 preamp models with fully editable effects chain for guitar and bass.', zh: '20 个前置放大器模型，吉他和贝斯效果链完全可编辑。' }
      },
      {
        icon: 'layers',
        color: 'cyan',
        title: { en: '80 Editable Presets', zh: '80 个可编辑预设' },
        desc: { en: '80 custom presets with full effects chain including IR CAB, EQ, modulation, delay, and reverb.', zh: '80 个自定义预设，效果链包含 IR CAB、EQ、调制、延迟和混响。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: '10-Hour Battery', zh: '10 小时续航' },
        desc: { en: 'Built-in rechargeable battery delivers up to 10 hours of uninterrupted play time.', zh: '内置可充电电池，持续演奏最长 10 小时。' }
      },
      {
        icon: 'audio',
        color: 'orange',
        title: { en: 'USB Audio Interface', zh: 'USB 音频接口' },
        desc: { en: 'Functions as a USB sound card for computer or OTG recording interface for smartphones.', zh: '可用作电脑 USB 声卡，或通过 OTG 连接智能手机录音。' }
      }
    ],
    highlights: [
      { label: { en: 'Presets', zh: '预设' }, value: '80' },
      { label: { en: 'Battery', zh: '续航' }, value: '10h' },
      { label: { en: 'Amps', zh: '放大器' }, value: '20' }
    ],
    gallery: ['images/productInfo/annblack-box-1.webp', 'images/productInfo/annblack-box-2.webp', 'images/productInfo/annblack-box-3.webp', 'images/productInfo/annblack-box-4.webp', 'images/productInfo/annblack-box-5.webp', 'images/productInfo/annblack-box-6.webp'],
    related: ['tank-g', 'mk-300'],
    officialUrl: 'https://www.m-vave.com/productinfo/1357145.html'
  },

  'tank-mini': {
    name: 'TANK MINI',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/TANK-MINI.pdf',
    category: 'multi',
    tagline: { en: 'Compact Multi-Effects with APP Control', zh: '紧凑型综合效果器，APP 控制' },
    description: {
      en: 'The TANK MINI is a compact multi-effects processor for guitar and bass. It packs 21 factory presets (editable and overwritable) and six effect modules — noise gate, boost, compressor, 20 amp-head models, 3-band EQ, 7 modulations, 5 delays, 6 reverbs and 20 classic IR cabinets. A built-in battery runs for 7 hours, and you can edit, swap and import/export tones and IR files via app or PC software.',
      zh: 'TANK MINI 是一款小巧的吉他/贝斯综合效果器。内置 21 个出厂预设（可编辑、可覆盖保存）与六大效果模块——降噪、Boost、压缩、20 种箱头音色模拟、三段 EQ、7 种调制、5 种延时、6 种混响与 20 种经典 IR 箱体模拟。内置电池满电续航 7 小时，支持通过 APP 或电脑软件编辑、交换、导入/导出音色与 IR 文件。'
    },
    image: 'images/products/tank-mini-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Guitar & bass multi-effects', zh: '吉他/贝斯综合效果器' } },
      { param: { en: 'Presets', zh: '预设' }, value: { en: '21 (editable / overwritable)', zh: '21 个（可编辑、可覆盖）' } },
      { param: { en: 'Effect Modules', zh: '效果模块' }, value: { en: 'Noise gate, Boost, Compressor, Amp, 3-band EQ, Mod, Delay, Reverb, IR', zh: '降噪、Boost、压缩、箱头、三段 EQ、调制、延时、混响、IR' } },
      { param: { en: 'Amp Models', zh: '音箱模拟' }, value: { en: '20 amp heads', zh: '20 种箱头' } },
      { param: { en: 'IR Cabinets', zh: 'IR 箱体' }, value: { en: '20 classic IR cabinets', zh: '20 种经典 IR 箱体' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: '7 modulations, 5 delays, 6 reverbs', zh: '7 调制、5 延时、6 混响' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth / USB', zh: '蓝牙 / USB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in, ~7h use', zh: '内置，续航约 7 小时' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB-C 5V/2A (~4.75h full), charge-and-play', zh: 'USB-C 5V/2A（约 4.75h 充满），支持边充边用' } },
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '21 Presets, 6 Modules', zh: '21 预设 · 6 模块' },
        desc: { en: '21 editable presets across six effect modules.', zh: '21 个可编辑预设，六大效果模块。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '20 Amps + 20 IR', zh: '20 箱头 + 20 IR' },
        desc: { en: '20 amp-head models and 20 classic IR cabinet sims.', zh: '20 种箱头音色模拟与 20 种经典 IR 箱体模拟。' }
      },
      {
        icon: 'app',
        color: 'green',
        title: { en: 'App / PC Editing', zh: '软件编辑' },
        desc: { en: 'Edit, swap and import/export tones and IR files.', zh: '可编辑、交换、导入/导出音色与 IR 文件。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '7h, Charge-and-Play', zh: '7h 续航' },
        desc: { en: 'Built-in battery runs 7 hours and works while charging.', zh: '内置电池续航 7 小时，支持边充边用。' }
      },
    ],
    gallery: ['images/productInfo/tank-mini-1.webp', 'images/productInfo/tank-mini-2.webp', 'images/productInfo/tank-mini-3.webp', 'images/productInfo/tank-mini-4.webp', 'images/productInfo/tank-mini-5.webp', 'images/productInfo/tank-mini-6.webp'],
    related: ['tank-g', 'pocket-amp'],
    officialUrl: 'https://www.m-vave.com/productinfo/1356792.html'
  },

  'looper-drum': {
    name: 'LOOPER DRUM',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/DRUM-LOOPER-PEDAL/DRUM-LOOPER-PEDAL.pdf',
    category: 'multi',
    tagline: { en: 'Looper + Drum Machine + Chromatic Tuner', zh: '循环录音 + 鼓机 + 半音阶调音器' },
    description: {
      en: 'Three tools in one pedal. 30 customizable drum types with 4/4, 3/4 and 6/8 rhythms. 4-loop recorder with up to 11 minutes total time (5 min per loop), unlimited overdubs, and WAV export via USB. Plus a built-in high-precision chromatic tuner. Customize drums in real time via the companion APP.',
      zh: '三合一踏板。30 种可自定义鼓型，支持 4/4、3/4、6/8 拍型。4 路循环录音，总时长最长 11 分钟（单路最长 5 分钟），无限叠录，通过 USB 导出 WAV。内置高精度半音阶调音器。通过配套 APP 实时自定义鼓型。'
    },
    image: 'images/products/looper-drum-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Drum Types', zh: '鼓型' }, value: { en: '30 types (customizable via APP)', zh: '30 种（可通过 APP 自定义）' } },
      { param: { en: 'Rhythm Patterns', zh: '节拍类型' }, value: { en: '4/4, 3/4, 6/8 and more', zh: '4/4、3/4、6/8 等多种节拍' } },
      { param: { en: 'Loop Slots', zh: '循环插槽' }, value: { en: '4 loops', zh: '4 路循环' } },
      { param: { en: 'Total Loop Time', zh: '总循环时长' }, value: { en: 'Up to 11 minutes', zh: '最长 11 分钟' } },
      { param: { en: 'Single Loop Time', zh: '单路时长' }, value: { en: 'Up to 5 minutes', zh: '最长 5 分钟' } },
      { param: { en: 'Overdubs', zh: '叠录' }, value: { en: 'Unlimited', zh: '无限次' } },
      { param: { en: 'Export', zh: '导出' }, value: { en: 'WAV audio via USB', zh: 'USB WAV 音频导出' } },
      { param: { en: 'Tuner', zh: '调音器' }, value: { en: 'Built-in chromatic tuner', zh: '内置半音阶调音器' } }
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '30-Type Drum Machine', zh: '30 种鼓机' },
        desc: { en: '30 drum types with 4/4, 3/4, and 6/8 rhythms — all customizable in real time via APP.', zh: '30 种鼓型，支持 4/4、3/4、6/8 节拍，均可通过 APP 实时自定义。' }
      },
      {
        icon: 'loop',
        color: 'cyan',
        title: { en: '4-Loop Recorder', zh: '4 路循环录音器' },
        desc: { en: '4 loops with unlimited overdubs, undo/redo per layer, and WAV export via USB.', zh: '4 路循环，无限叠录，逐层撤销/重做，通过 USB 导出 WAV。' }
      },
      {
        icon: 'latency',
        color: 'green',
        title: { en: 'Built-in Chromatic Tuner', zh: '内置半音阶调音器' },
        desc: { en: 'High-precision tuner with sharp/flat detection — no need for a separate tuner pedal.', zh: '高精度调音器，支持升降号检测——无需额外调音踏板。' }
      }
    ],
    highlights: [
      { label: { en: 'Drums', zh: '鼓型' }, value: '30' },
      { label: { en: 'Loops', zh: '循环' }, value: '4' },
      { label: { en: 'Time', zh: '时长' }, value: '11min' }
    ],
    gallery: ['images/productInfo/looper-drum-1.webp', 'images/productInfo/looper-drum-2.webp', 'images/productInfo/looper-drum-3.webp', 'images/productInfo/looper-drum-4.webp', 'images/productInfo/looper-drum-5.webp'],
    related: ['loop-ii', 'mk-300'],
    officialUrl: 'https://www.m-vave.com/productinfo/1293593.html'
  },

  'midi-system': {
    name: 'MIDI SYSTEM',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/MIDI-SYSTEM.pdf',
    category: 'wireless',
    tagline: { en: 'Wireless MIDI Transmission System', zh: '无线 MIDI 传输系统' },
    description: {
      en: 'Cut the MIDI cable. The MIDI SYSTEM is a 2.4GHz wireless MIDI link with ultra-low latency under 3ms and up to 48 hours of battery life. The compact MIDI A and MIDI B units connect keyboards, controllers and computers wirelessly across iOS, Mac and PC.',
      zh: '剪断 MIDI 线缆。MIDI SYSTEM 是一款 2.4GHz 无线 MIDI 传输系统，延迟超低（<3ms），续航最长 48 小时。小巧的 MIDI Ⓐ 与 MIDI Ⓑ 单元可在 iOS、Mac 与 PC 间无线连接键盘、控制器和电脑。'
    },
    image: 'images/products/midi-system-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz', zh: '2.4GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<3ms', zh: '<3ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '≤10m', zh: '≤10 米' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'Up to 48 hours', zh: '最长 48 小时' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '240mAh (751525), 3.7V', zh: '240mAh（751525），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB data cable', zh: 'USB 数据线' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: 'MIDI A 24x50x80 / MIDI B 48x20x10 mm', zh: 'MIDI Ⓐ 24x50x80 / MIDI Ⓑ 48x20x10 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '32g', zh: '32g' } },
      { param: { en: 'Compatibility', zh: '兼容' }, value: { en: 'iOS / Mac / PC (USB MIDI)', zh: 'iOS / Mac / PC（USB MIDI）' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: 'Wireless MIDI', zh: '无线 MIDI' },
        desc: { en: '2.4GHz wireless MIDI between instruments and computers.', zh: '2.4GHz 无线 MIDI，连接乐器与电脑。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: '<3ms Latency', zh: '延迟 <3ms' },
        desc: { en: 'Ultra-low latency keeps your playing perfectly in time.', zh: '超低延迟，演奏紧跟节奏。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: '48h Battery', zh: '48 小时续航' },
        desc: { en: 'Up to 48 hours of continuous use on a charge.', zh: '满电最长可连续使用 48 小时。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Plug A & B', zh: 'Ⓐ / Ⓑ 双单元' },
        desc: { en: 'Compact MIDI A and MIDI B units work across iOS, Mac and PC.', zh: '小巧的 MIDI Ⓐ 与 Ⓑ 单元，兼容 iOS、Mac 与 PC。' }
      },
    ],
    gallery: ['images/productInfo/midi-system-1.webp', 'images/productInfo/midi-system-2.webp', 'images/productInfo/midi-system-3.webp'],
    related: ['sk7', 'smk25-ii', 'smc-mixer'],
    officialUrl: 'https://www.m-vave.com/productinfo/1463409.html'
  },

  'sk7': {
    name: 'SK7',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/SK7.pdf',
    category: 'wireless',
    tagline: { en: 'Rechargeable Wireless MIDI Receiver/Transmitter', zh: '可充电无线 MIDI 收发器' },
    description: {
      en: 'Wireless MIDI in your pocket. The SK7 is a rechargeable wireless MIDI transmitter/receiver running on 2.4GHz with just 3ms latency and a 15m range. USB-C charging delivers up to 25 hours of use and USB MIDI is supported out of the box — all in a 16g body.',
      zh: 'MIDI 无线，口袋随行。SK7 是一款可充电无线 MIDI 收发器，采用 2.4GHz 频段，延迟仅 3ms，有效距离 15 米。USB-C 充电带来最长 25 小时续航，并原生支持 USB MIDI，机身仅 16g。'
    },
    image: 'images/products/sk7-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz', zh: '2.4GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '3ms', zh: '3ms' } },
      { param: { en: 'Range', zh: '有效距离' }, value: { en: '≤15m', zh: '≤15 米' } },
      { param: { en: 'Charging Port', zh: '充电接口' }, value: { en: 'USB-C', zh: 'USB-C' } },
      { param: { en: 'USB MIDI', zh: 'USB MIDI' }, value: { en: 'Supported', zh: '支持' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: '25 hours', zh: '25 小时' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '240mAh (751525), 3.7V', zh: '240mAh（751525），3.7V' } },
      { param: { en: 'Size', zh: '机身尺寸' }, value: { en: '49.6(L) x 21(W) x 18.8(H) mm', zh: '49.6(L) x 21(W) x 18.8(H) mm' } },
      { param: { en: 'Weight', zh: '机身重量' }, value: { en: '16g', zh: '16g' } },
      { param: { en: 'Accessories', zh: '配件' }, value: { en: 'Unit, USB cable x1', zh: '主机、USB 数据线 x1' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: 'Wireless MIDI TX/RX', zh: '无线 MIDI 收发' },
        desc: { en: 'Rechargeable 2.4GHz transmitter/receiver in one tiny unit.', zh: '可充电 2.4GHz 收发一体，机身小巧。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: '3ms Latency', zh: '3ms 延迟' },
        desc: { en: 'Stable 2.4GHz link with just 3ms of latency.', zh: '稳定 2.4GHz 连接，延迟仅 3ms。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: '25h on USB-C', zh: 'USB-C 25 小时' },
        desc: { en: 'Up to 25 hours of use, charged over USB-C.', zh: 'USB-C 充电，续航最长 25 小时。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Just 16g', zh: '仅 16g' },
        desc: { en: 'Ultra-light 16g body that supports USB MIDI.', zh: '超轻 16g 机身，支持 USB MIDI。' }
      },
    ],
    gallery: ['images/productInfo/sk7-1.webp', 'images/productInfo/sk7-2.webp', 'images/productInfo/sk7-3.webp', 'images/productInfo/sk7-4.webp', 'images/productInfo/sk7-5.webp'],
    related: ['midi-system', 'sws11', 'wp-9'],
    officialUrl: 'https://www.m-vave.com/productinfo/1431199.html'
  },

  'wireless-earphone': {
    name: 'WP-12',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS12.pdf',
    category: 'wireless',
    tagline: { en: 'Wireless Earphone Monitoring System', zh: '无线耳机监听系统' },
    description: {
      en: 'Personal monitoring, completely cable-free. The WP-12 is a 2.4GHz one-to-two wireless in-ear monitor system — a charging-case transmitter plus two receivers — with 24bit/48KHz lossless audio and a 30m range. The transmitter runs up to 24 hours and receivers up to 6, with left/right/stereo/mute modes and a clip-on lavalier design.',
      zh: '个人监听，彻底摆脱线缆。WP-12 是一款 2.4GHz 一拖二无线耳返系统——发射器（充电仓）搭配两个接收器——24bit/48KHz 无损音质、30 米传输距离。发射器续航长达 24 小时、接收器 6 小时，提供左声道/右声道/立体声/静音四种模式，采用便携领夹设计。'
    },
    image: 'images/products/wireless-earphone-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz lossless', zh: '24bit / 48KHz 无损' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz', zh: '2.4GHz' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m', zh: '30 米' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 4 pairs simultaneously', zh: '最多 4 对同时使用' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'TX 24h / RX 6h', zh: '发射器 24h / 接收器 6h' } },
      { param: { en: 'Modes', zh: '工作模式' }, value: { en: 'Left / Right / Stereo / Mute', zh: '左 / 右 / 立体声 / 静音' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'Type-C (charging case)', zh: 'Type-C（充电仓）' } },
      { param: { en: 'Design', zh: '设计' }, value: { en: 'Clip-on lavalier / mini belt pack', zh: '领夹 / 迷你腰包' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '24bit/48KHz Lossless', zh: '24bit/48KHz 无损' },
        desc: { en: 'Lossless professional audio for transparent in-ear monitoring.', zh: '无损专业音质，入耳监听通透。' }
      },
      {
        icon: 'audio',
        color: 'cyan',
        title: { en: 'One-to-Two', zh: '一拖二' },
        desc: { en: 'One charging-case transmitter feeds two receivers at once.', zh: '一个充电仓发射器同时驱动两个接收器。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: '4 Monitor Modes', zh: '四种模式' },
        desc: { en: 'Left, right, stereo and mute modes for any setup.', zh: '左、右、立体声与静音四种模式，适配各种场景。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '24h Transmitter', zh: '发射器 24h' },
        desc: { en: 'Transmitter runs up to 24 hours, receivers up to 6.', zh: '发射器续航长达 24 小时，接收器可达 6 小时。' }
      },
    ],
    gallery: ['images/productInfo/2.4ghz-wireless-earphone-monitor-1.webp', 'images/productInfo/2.4ghz-wireless-earphone-monitor-2.webp', 'images/productInfo/2.4ghz-wireless-earphone-monitor-3.webp', 'images/productInfo/2.4ghz-wireless-earphone-monitor-4.webp', 'images/productInfo/2.4ghz-wireless-earphone-monitor-5.webp', 'images/productInfo/2.4ghz-wireless-earphone-monitor-6.webp'],
    related: ['sws11', 'wireless-iem'],
    officialUrl: 'https://www.m-vave.com/productinfo/1356777.html'
  },

  'wp-13': {
    name: 'WP-13',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS13.pdf',
    category: 'wireless',
    tagline: { en: '5.8GHz Wireless Transceiver System with Charging Case', zh: '5.8GHz 无线收发系统，含充电仓' },
    description: {
      en: 'High-performance wireless built for the stage. The WP-13 is a 5.8GHz wireless audio transmission system focused on stable, low-latency delivery — as low as 3ms — with 30m+ range. A charging-case design and 6.35mm mono connector make it ready for stage amps, PA systems and wired mics.',
      zh: '为舞台而生的高性能无线。WP-13 是一款 5.8GHz 无线音频传输系统，专注稳定、低延迟传输（低至 3ms），传输距离 30 米以上。充电仓设计与 6.35mm 单声道插头，适配舞台音响、PA 系统与有线麦克风。'
    },
    image: 'images/products/wp-13-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz', zh: '24bit / 48KHz' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '5.8GHz', zh: '5.8GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: 'As low as 3ms', zh: '低至 3ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m+ (open space)', zh: '30 米以上（开阔环境）' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: 'Charging case (5V/2A)', zh: '充电仓（5V/2A）' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '6.35mm mono', zh: '6.35mm 单声道' } },
      { param: { en: 'Indicator', zh: '指示' }, value: { en: 'LED battery display', zh: 'LED 电量显示' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: '5.8GHz Wireless', zh: '5.8GHz 无线' },
        desc: { en: '5.8GHz band delivers stable, low-interference transmission.', zh: '5.8GHz 频段，传输稳定、抗干扰。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: '3ms Latency', zh: '3ms 延迟' },
        desc: { en: 'Latency as low as 3ms with no noticeable lag.', zh: '延迟低至 3ms，无明显音画不同步。' }
      },
      {
        icon: 'audio',
        color: 'green',
        title: { en: '30m+ Range', zh: '30m+ 距离' },
        desc: { en: '30m+ range in open environments for the whole stage.', zh: '开阔环境传输距离 30 米以上，覆盖整个舞台。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'Charging Case', zh: '充电仓' },
        desc: { en: 'Charging-case design keeps outdoor sets powered.', zh: '充电仓设计，户外演出电量无忧。' }
      },
    ],
    gallery: ['images/productInfo/wp-13-1.webp', 'images/productInfo/wp-13-2.webp', 'images/productInfo/wp-13-3.webp', 'images/productInfo/wp-13-4.webp', 'images/productInfo/wp-13-5.webp'],
    related: ['wp-8', 'wireless-earphone'],
    officialUrl: 'https://www.m-vave.com/'
  },

  'wp-7': {
    name: 'WP-7',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WP-7.pdf',
    category: 'wireless',
    tagline: { en: 'Professional 2.4GHz Wireless Microphone System', zh: '专业 2.4GHz 无线麦克风系统' },
    description: {
      en: 'Long-range wireless freedom. The WP-7 is a 2.4GHz wireless audio system with 24bit/48KHz uncompressed transmission, latency under 12ms, and an outdoor range of 30–50m. Up to 6 sets run together without interference, making it ideal for instruments and microphones on bigger stages.',
      zh: '远距离无线自由。WP-7 是一款 2.4GHz 无线音频系统，24bit/48KHz 无压缩传输、延迟低于 12ms，户外有效距离达 30–50 米。最多支持 6 组同时无干扰工作，适合大型舞台上的乐器与麦克风使用。'
    },
    image: 'images/products/wp-7-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz uncompressed', zh: '24bit / 48KHz 无压缩' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz ISM', zh: '2.4GHz ISM' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<12ms', zh: '<12ms' } },
      { param: { en: 'Range', zh: '有效距离' }, value: { en: '30–50m outdoor / 15m through wall', zh: '户外 30–50 米 / 穿墙 15 米' } },
      { param: { en: 'THD', zh: '总谐波失真' }, value: { en: '-98dB', zh: '-98dB' } },
      { param: { en: 'SNR', zh: '信噪比' }, value: { en: '>105dB', zh: '>105dB' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'TX 800mAh / RX 500mAh (802050/802035), 3.7V', zh: 'TX 800mAh / RX 500mAh（802050/802035），3.7V' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 6 sets simultaneously', zh: '最多 6 组同时使用' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '24bit/48KHz Uncompressed', zh: '24bit/48KHz 无压缩' },
        desc: { en: 'Uncompressed transmission for full-resolution sound.', zh: '无压缩传输，全分辨率还原音质。' }
      },
      {
        icon: 'wireless',
        color: 'cyan',
        title: { en: '30–50m Range', zh: '30–50m 距离' },
        desc: { en: 'Outdoor range of 30–50m to cover larger stages.', zh: '户外有效距离 30–50 米，覆盖更大舞台。' }
      },
      {
        icon: 'latency',
        color: 'green',
        title: { en: '<12ms Latency', zh: '延迟 <12ms' },
        desc: { en: 'Low latency on the worldwide 2.4GHz ISM band.', zh: '全球通用 2.4GHz ISM 频段，延迟低。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'Up to 6 Sets', zh: '最多 6 组' },
        desc: { en: 'Up to 6 sets work together without interference.', zh: '最多 6 组同时工作，互不干扰。' }
      },
    ],
    gallery: ['images/productInfo/wp-7-1.webp', 'images/productInfo/wp-7-2.webp', 'images/productInfo/wp-7-3.webp', 'images/productInfo/wp-7-4.webp', 'images/productInfo/wp-7-5.webp'],
    related: ['wp-9', 'sws11'],
    officialUrl: 'https://www.m-vave.com/productinfo/1293585.html'
  },

  'wireless-iem': {
    name: 'WP-10',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS10.pdf',
    category: 'wireless',
    tagline: { en: 'Professional Wireless IEM System', zh: '专业无线入耳监听系统' },
    description: {
      en: 'Affordable pro in-ear monitoring. The WP-10 is a 2.4GHz wireless IEM system with 24bit/48KHz lossless audio, latency under 12ms, and 30m range. A 16-step volume control, mono/stereo switch and clip-on lavalier design pack pro features into a 50g body with around 7 hours of battery life.',
      zh: '亲民的专业入耳监听。WP-10 是一款 2.4GHz 无线耳返系统，24bit/48KHz 无损音质、延迟低于 12ms、传输距离 30 米。16 段音量调节、单声道/立体声切换与领夹设计，将专业功能浓缩进 50g 机身，续航约 7 小时。'
    },
    image: 'images/products/wireless-iem-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz lossless', zh: '24bit / 48KHz 无损' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz', zh: '2.4GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<12ms', zh: '<12ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m outdoor / 15m through wall', zh: '户外 30 米 / 穿墙 15 米' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'About 7 hours', zh: '约 7 小时' } },
      { param: { en: 'SNR', zh: '信噪比' }, value: { en: '-98dB', zh: '-98dB' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'TX 780mAh / RX 450mAh (603040/602040), 3.7V', zh: 'TX 780mAh / RX 450mAh（603040/602040），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB Type-C', zh: 'USB Type-C' } },
      { param: { en: 'Volume', zh: '音量' }, value: { en: '16-step adjustable', zh: '16 段可调' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '55.5 x 45.7 x 19.5 mm', zh: '55.5 x 45.7 x 19.5 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '50g', zh: '50g' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '24bit/48KHz Lossless', zh: '24bit/48KHz 无损' },
        desc: { en: 'Lossless professional audio for transparent monitoring.', zh: '无损专业音质，监听通透。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: '16-Step Volume', zh: '16 段音量' },
        desc: { en: 'Fine 16-step volume control on the receiver.', zh: '接收器 16 段精细音量调节。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Clip-on 50g Body', zh: '领夹 50g' },
        desc: { en: 'Lightweight 50g lavalier design clips on anywhere.', zh: '轻量 50g 领夹设计，随处夹戴。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '~7h Battery', zh: '续航约 7h' },
        desc: { en: 'About 7 hours of use, charged over USB Type-C.', zh: '约 7 小时续航，USB Type-C 充电。' }
      },
    ],
    gallery: ['images/productInfo/wireless-in-ear-monitor-system-1.webp', 'images/productInfo/wireless-in-ear-monitor-system-2.webp', 'images/productInfo/wireless-in-ear-monitor-system-3.webp', 'images/productInfo/wireless-in-ear-monitor-system-4.webp', 'images/productInfo/wireless-in-ear-monitor-system-5.webp'],
    related: ['sws11', 'wireless-earphone'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141650.html'
  },

  'wp-8': {
    name: 'WP-8',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS8.pdf',
    category: 'wireless',
    tagline: { en: '2.4GHz Wireless Guitar System with Charging Box', zh: '2.4GHz 无线吉他系统，含充电仓' },
    description: {
      en: 'Wireless that goes the distance. The WP-8 is a 2.4GHz wireless system with 24bit/48KHz audio, latency as low as 6.7ms, and up to 25m outdoor range. Convertible 3.5mm/6.35mm plugs rotate 190° to fit most electric instruments, with up to 4 sets running together and a charging case for all-day use.',
      zh: '能跑长距离的无线系统。WP-8 是一款 2.4GHz 无线系统，24bit/48KHz 音质、延迟低至 6.7ms、户外距离可达 25 米。3.5mm/6.35mm 可转换插头支持 190° 旋转，适配大部分电声乐器，最多 4 组同时工作，配充电盒全天续航。'
    },
    image: 'images/products/wp-8.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz', zh: '24bit / 48KHz' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz', zh: '2.4GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<6.7ms', zh: '<6.7ms' } },
      { param: { en: 'Range', zh: '有效范围' }, value: { en: '≤25m outdoor / 15m through wall', zh: '户外 ≤25 米 / 穿墙 15 米' } },
      { param: { en: 'Dynamic Range', zh: '动态范围' }, value: { en: '>105dB', zh: '>105dB' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'TX 550mAh / RX 450mAh (502540/602040), 3.7V', zh: 'TX 550mAh / RX 450mAh（502540/602040），3.7V' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '3.5mm + 6.35mm, 190° rotating', zh: '3.5mm + 6.35mm，190° 旋转' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 4 sets simultaneously', zh: '最多 4 组同时使用' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'About 6 hours', zh: '约 6 小时' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB / Type-C (charging case)', zh: 'USB / Type-C（充电盒）' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '24bit/48KHz Audio', zh: '24bit/48KHz 音质' },
        desc: { en: '24bit/48KHz transmission for clean, full-range sound.', zh: '24bit/48KHz 传输，音质纯净全频。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: '6.7ms Latency', zh: '6.7ms 延迟' },
        desc: { en: 'Low latency down to 6.7ms for tight response.', zh: '延迟低至 6.7ms，响应紧致。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: '190° Rotating Plug', zh: '190° 旋转插头' },
        desc: { en: 'Convertible 3.5mm/6.35mm plugs rotate 190° to fit most instruments.', zh: '3.5mm/6.35mm 可转换插头 190° 旋转，适配大部分乐器。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'Charging Case', zh: '充电盒' },
        desc: { en: 'Charging case and up to 4 simultaneous sets for all day.', zh: '配充电盒，最多 4 组同时，全天可用。' }
      },
    ],
    gallery: ['images/productInfo/wp-8-1.webp', 'images/productInfo/wp-8-2.webp', 'images/productInfo/wp-8-3.webp', 'images/productInfo/wp-8-4.webp', 'images/productInfo/wp-8-5.webp'],
    related: ['wp-9', 'sws11'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141647.html'
  },

  'wp-1': {
    name: 'WP-1',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS1.pdf',
    category: 'wireless',
    tagline: { en: 'Entry-Level Wireless Guitar System', zh: '入门级无线吉他系统' },
    description: {
      en: 'Set your instrument free. The WP-1 is a 2.4GHz wireless audio transceiver with a 280° rotating head designed for drums, keyboards and most electric instruments. It delivers 24bit/48KHz uncompressed audio, latency under 12ms, 30m range, and supports up to 6 sets at once with around 7.5 hours of battery life.',
      zh: '让乐器挣脱线缆。WP-1 是一款 2.4GHz 无线音频收发器，配备 280° 可旋转接头，专为电鼓、键盘及大部分电声乐器设计。提供 24bit/48KHz 无压缩音质、延迟低于 12ms、30 米传输距离，最多支持 6 组同时使用，续航约 7.5 小时。'
    },
    image: 'images/products/wp-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz uncompressed', zh: '24bit / 48KHz 无压缩' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz ISM', zh: '2.4GHz ISM' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<12ms', zh: '<12ms' } },
      { param: { en: 'Range', zh: '有效距离' }, value: { en: '30m outdoor / 15m through wall', zh: '户外 30 米 / 穿墙 15 米' } },
      { param: { en: 'THD', zh: '失真度' }, value: { en: '-98dB', zh: '-98dB' } },
      { param: { en: 'Dynamic Range', zh: '动态范围' }, value: { en: '>105dB', zh: '>105dB' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'TX 780mAh / RX 450mAh (603040/602040), 3.7V', zh: 'TX 780mAh / RX 450mAh（603040/602040），3.7V' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '280° rotating head', zh: '280° 可旋转接头' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 6 sets simultaneously', zh: '最多 6 组同时使用' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'About 7.5 hours', zh: '约 7.5 小时' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: '24bit/48KHz Uncompressed', zh: '24bit/48KHz 无压缩' },
        desc: { en: 'Uncompressed transmission for full-resolution sound.', zh: '无压缩传输，全分辨率还原音质。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: '280° Rotating Head', zh: '280° 旋转接头' },
        desc: { en: 'Rotating head fits drums, keyboards and most electric instruments.', zh: '可旋转接头适配电鼓、键盘及大部分电声乐器。' }
      },
      {
        icon: 'latency',
        color: 'green',
        title: { en: '<12ms · 30m', zh: '<12ms · 30m' },
        desc: { en: 'Under 12ms latency with a 30m transmission range.', zh: '延迟低于 12ms，传输距离 30 米。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'Up to 6 Sets', zh: '最多 6 组' },
        desc: { en: 'Up to 6 sets run together with about 7.5h battery.', zh: '最多 6 组同时使用，续航约 7.5 小时。' }
      },
    ],
    gallery: ['images/productInfo/wp-1-1.webp', 'images/productInfo/wp-1-2.webp', 'images/productInfo/wp-1-3.webp', 'images/productInfo/wp-1-4.webp'],
    related: ['wp-9', 'sws11'],
    officialUrl: 'https://www.m-vave.com/productinfo/128579.html'
  },

  'tuner': {
    name: 'TUNER',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/Tuner.pdf',
    category: 'pedal',
    tagline: { en: 'High-Precision Chromatic Tuner Pedal', zh: '高精度半音调谐踏板' },
    description: {
      en: 'Compact metal design with high precision and fast response. Clear screen instantly shows pitch and note name. In tuning mode output is automatically muted — ideal for silent stage tuning. True bypass preserves your signal whether powered on or off. Detection accuracy of ±1 cent covers the full chromatic range from 12Hz to 4186Hz.',
      zh: '紧凑金属设计，高精度快速响应。清晰屏幕即时显示音高和音名。调音模式下自动静音输出——非常适合舞台静音调音。真旁路无论开机关机均保持信号纯净。±1 音分的检测精度覆盖 12Hz 至 4186Hz 的完整半音阶范围。'
    },
    image: 'images/products/tuner-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: '1/4" mono audio jack', zh: '1/4" 单声道音频接口' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: '1/4" mono audio jack', zh: '1/4" 单声道音频接口' } },
      { param: { en: 'Detection Range', zh: '检测范围' }, value: { en: '12Hz — 4186Hz', zh: '12Hz — 4186Hz' } },
      { param: { en: 'Accuracy', zh: '精度' }, value: { en: '±1 cent', zh: '±1 音分' } },
      { param: { en: 'Bypass', zh: '旁路' }, value: { en: 'True Bypass', zh: '真旁路' } },
      { param: { en: 'Housing', zh: '外壳' }, value: { en: 'Compact metal', zh: '紧凑金属外壳' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: '9V DC (center negative)', zh: '9V DC（中心负极）' } }
    ],
    features: [
      {
        icon: 'latency',
        color: 'purple',
        title: { en: '±1 Cent Accuracy', zh: '±1 音分精度' },
        desc: { en: 'High precision and fast response for professional-grade tuning on stage or in studio.', zh: '高精度快速响应，满足舞台或录音室的专业调音需求。' }
      },
      {
        icon: 'led',
        color: 'cyan',
        title: { en: 'Clear Screen Display', zh: '清晰屏幕显示' },
        desc: { en: 'Instantly shows pitch and note name. Green center = in tune; red left/right = flat/sharp.', zh: '即时显示音高和音名。绿色居中 = 准音；红色左/右 = 偏低/偏高。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Genuine signal pass-through — functions as a pure cable whether powered on or off.', zh: '真实信号直通——无论开机关机均可作为纯线缆使用。' }
      },
      {
        icon: 'silent',
        color: 'orange',
        title: { en: 'Mute on Tuning', zh: '调音静音' },
        desc: { en: 'Output is automatically muted in tuning mode for silent stage tuning.', zh: '调音模式下自动静音输出，适合舞台无声调音。' }
      }
    ],
    highlights: [
      { label: { en: 'Accuracy', zh: '精度' }, value: '±1¢' },
      { label: { en: 'Range', zh: '范围' }, value: '12-4186Hz' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/tuner-1.webp', 'images/productInfo/tuner-2.webp', 'images/productInfo/tuner-3.webp', 'images/productInfo/tuner-4.webp', 'images/productInfo/tuner-5.webp', 'images/productInfo/tuner-6.webp'],
    related: ['tuner-v1', 'mini-universe', 'classic-delay'],
    officialUrl: 'https://www.m-vave.com/productinfo/3556679.html'
  },

  'ir-box': {
    name: 'IR BOX',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/IRBOX/IRBOX_ZE.pdf',
    category: 'pedal',
    tagline: { en: 'Cabinet Simulator with IR Loading', zh: '箱体模拟器，支持 IR 加载' },
    description: {
      en: '32 factory CAB presets (25 electric guitar + 7 bass) with independent IR and EQ modules per preset. 103dB SNR with 44100Hz/24-bit sampling. Load custom IR files via mobile app or computer. XLR balanced output and 3.5mm earphone monitoring. Dual power: USB-C or DC 9V.',
      zh: '32 个出厂 CAB 预设（25 个电吉他 + 7 个贝斯），每个预设带独立的 IR 和 EQ 模块。103dB 信噪比，44100Hz/24-bit 采样。通过手机 APP 或电脑加载自定义 IR 文件。XLR 平衡输出和 3.5mm 耳机监听。双电源：USB-C 或 DC 9V。'
    },
    image: 'images/products/ir-box-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Presets', zh: '预设' }, value: { en: '32 CAB presets (25 guitar + 7 bass)', zh: '32 个 CAB 预设（25 吉他 + 7 贝斯）' } },
      { param: { en: 'SNR', zh: '信噪比' }, value: { en: '103dB', zh: '103dB' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '44100Hz / 24-bit', zh: '44100Hz / 24-bit' } },
      { param: { en: 'Custom IR', zh: '自定义 IR' }, value: { en: 'WAV 44100Hz 24-bit 2048 samples', zh: 'WAV 44100Hz 24-bit 2048 采样点' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'XLR balanced + 3.5mm earphone', zh: 'XLR 平衡 + 3.5mm 耳机' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: 'USB-C or DC 9V', zh: 'USB-C 或 DC 9V' } }
    ],
    features: [
      {
        icon: 'layers',
        color: 'purple',
        title: { en: '32 CAB Presets', zh: '32 个 CAB 预设' },
        desc: { en: '25 electric guitar + 7 bass CAB simulations covering most music styles.', zh: '25 个电吉他 + 7 个贝斯箱体仿真，覆盖大多数音乐风格。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'IR + EQ Modules', zh: 'IR + EQ 模块' },
        desc: { en: 'Each preset includes independent IR and EQ modules, usable together or separately.', zh: '每个预设含独立的 IR 和 EQ 模块，可单独或联合使用。' }
      },
      {
        icon: 'app',
        color: 'green',
        title: { en: 'Custom IR Loading', zh: '自定义 IR 加载' },
        desc: { en: 'Import your own WAV IR files via mobile app or computer software.', zh: '通过手机 APP 或电脑软件导入自定义 WAV IR 文件。' }
      },
      {
        icon: 'audio',
        color: 'orange',
        title: { en: 'XLR Balanced Output', zh: 'XLR 平衡输出' },
        desc: { en: 'Professional XLR balanced output and 3.5mm earphone monitoring jack.', zh: '专业 XLR 平衡输出，附带 3.5mm 耳机监听接口。' }
      }
    ],
    highlights: [
      { label: { en: 'Presets', zh: '预设' }, value: '32' },
      { label: { en: 'SNR', zh: '信噪比' }, value: '103dB' },
      { label: { en: 'Output', zh: '输出' }, value: 'XLR' }
    ],
    gallery: ['images/productInfo/ir-box-1.webp', 'images/productInfo/ir-box-2.webp', 'images/productInfo/ir-box-3.webp', 'images/productInfo/ir-box-4.webp'],
    related: ['tank-g', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/1293562.html'
  },

  'elemental': {
    name: 'ELEMENTAL',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/ELEMENTAL.pdf',
    category: 'pedal',
    tagline: {
      en: 'Digital Modeling Delay Effector',
      zh: '数字建模延迟效果器'
    },
    description: {
      en: 'Travel through sonic elements. ELEMENTAL is a powerful digital modeling delay effector with 9 delay types, up to 3,000ms delay time, TAP tempo mode, and HOLD mode for infinite freeze effects. High-performance digital signal processing delivers a psychedelic, deep timbre with excellent dynamic response.',
      zh: '穿越音色元素。ELEMENTAL 是一款强大的数字建模延迟效果器，拥有 9 种延迟类型、最长 3000ms 延迟时间、TAP 节拍模式和 HOLD 无限冻结模式。高性能数字信号处理带来迷幻深邃的音色和出色的动态响应。'
    },
    image: 'images/products/elemental-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '112(L) x 68(W) x 40(H) mm', zh: '112(L) x 68(W) x 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: 'About 242g', zh: 'About 242g' } },
    ],
    features: [
      {
        icon: 'delay',
        color: 'purple',
        title: { en: 'Artistic Design', zh: '艺术感外观' },
        desc: { en: 'An artistic appearance design.', zh: '富有艺术感的外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '9 Delay Effects', zh: '9 种延迟' },
        desc: { en: '9 delay effects in total, suitable for most music styles.', zh: '共 9 种延迟效果，适用于大部分音乐风格。' }
      },
      {
        icon: 'delay',
        color: 'green',
        title: { en: 'Up to 3000ms', zh: '最长 3000ms' },
        desc: { en: 'Up to 3000ms delay time with detailed, high-performance DSP.', zh: '最长 3000ms 延迟，高性能数字信号处理，效果细致入微。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'TAP + HOLD', zh: 'TAP + HOLD' },
        desc: { en: 'TAP tempo plus a HOLD freeze mode for infinite sustain.', zh: '支持 TAP 打拍定速，以及 HOLD 声音冻结无限延音功能。' }
      },
    ],
    highlights: [
      { label: { en: 'Types', zh: '类型' }, value: '9' },
      { label: { en: 'Max Delay', zh: '最长延迟' }, value: '3000ms' },
      { label: { en: 'Mode', zh: '模式' }, value: 'TAP/HOLD' }
    ],
    gallery: ['images/productInfo/elemental-1.webp', 'images/productInfo/elemental-2.webp', 'images/productInfo/elemental-3.webp', 'images/productInfo/elemental-4.webp', 'images/productInfo/elemental-5.webp'],
    related: ['classic-delay', 'dig-delay', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/1293513.html'
  },

  'cube-turner-plus': {
    name: 'CUBE TURNER PLUS',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/CUBE-TURNER/Cube-Turner-plus.pdf',
    category: 'cat_control_pedals',
    tagline: { en: 'Enhanced WIRELESS Page Turner', zh: '增强版蓝牙翻谱器' },
    description: {
      en: 'CUBE TURNER PLUS is a wireless Bluetooth foot controller configured through the Cubesuite app. It simulates keyboard input including common multimedia keys, sends custom MIDI codes, controls other M-VAVE devices, and emulates Android touchscreen swipes, with landscape and portrait modes — all by foot, up to 48 hours per charge.',
      zh: '通过 Cubesuite APP 设置的无线蓝牙脚踏控制器。CUBE TURNER PLUS 可模拟键盘输入（含常用多媒体键）、发送自定义 MIDI 码、控制本司其他设备、模拟安卓触屏滑动，并支持横屏/竖屏两种模式——全程脚控，满电续航长达 48 小时。'
    },
    image: 'images/products/cube-turner-plus.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Wireless foot controller', zh: '无线脚踏控制器' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth', zh: '蓝牙 BT' } },
      { param: { en: 'App', zh: 'APP' }, value: { en: 'Configured via Cubesuite', zh: '通过 Cubesuite 设置' } },
      { param: { en: 'Functions', zh: '功能' }, value: { en: 'Keyboard input / multimedia / custom MIDI / Android swipe', zh: '键盘输入 / 多媒体键 / 自定义 MIDI / 安卓滑屏' } },
      { param: { en: 'Modes', zh: '模式' }, value: { en: 'Landscape / Portrait', zh: '横屏 / 竖屏' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '300mAh (602030), 3.7V', zh: '300mAh（602030），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'Type-C', zh: 'Type-C' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'Up to 48 hours', zh: '长达 48 小时' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: 'Wireless Bluetooth', zh: '无线蓝牙' },
        desc: { en: 'Bluetooth foot control set up entirely from the Cubesuite app.', zh: '蓝牙无线脚控，全部通过 Cubesuite APP 设置。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Keyboard + Custom MIDI', zh: '键盘 + 自定义 MIDI' },
        desc: { en: 'Simulates keyboard input and sends custom MIDI codes.', zh: '模拟键盘输入，并可发送自定义 MIDI 码。' }
      },
      {
        icon: 'app',
        color: 'green',
        title: { en: 'Controls M-VAVE Gear', zh: '联动本司设备' },
        desc: { en: 'Controls other M-VAVE devices and emulates Android swipes.', zh: '可控制本司其他设备，并模拟安卓触屏滑动。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: '48h Battery', zh: '48 小时续航' },
        desc: { en: 'Up to 48 hours of continuous use per charge.', zh: '满电连续使用长达 48 小时。' }
      },
    ],
    gallery: ['images/productInfo/cube-turner-plus-1.webp', 'images/productInfo/cube-turner-plus-2.webp', 'images/productInfo/cube-turner-plus-3.webp', 'images/productInfo/cube-turner-plus-4.webp', 'images/productInfo/cube-turner-plus-5.webp'],
    related: ['cube-turner-pro', 'chocolate-plus'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141691.html'
  },

  'chocolate': {
    name: 'Chocolate',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/CUBE-TURNER/Chotolate.pdf',
    category: 'cat_control_pedals',
    tagline: { en: 'Compact Wireless Page Turner', zh: '紧凑型无线翻谱器' },
    description: {
      en: 'A pocket-sized MIDI foot controller for hands-free control. Chocolate is compact and light, with smart APP setup, a display that gives direct command feedback, and broad compatibility across Windows, Mac, iOS and Android. A 2.5-hour charge delivers up to 12 hours of use.',
      zh: '便携小巧的 MIDI 脚踏控制器，解放双手。Chocolate 机身轻巧，配合智能 APP 设置，屏幕可直接反馈发出的指令，直观清晰，兼容 Windows、Mac、iOS、Android 多平台。充电 2.5 小时即可使用长达 12 小时。'
    },
    image: 'images/products/chocolate.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Portable MIDI foot controller', zh: '便携式 MIDI 脚踏控制器' } },
      { param: { en: 'Compatibility', zh: '兼容' }, value: { en: 'Windows / Mac / iOS / Android', zh: 'Windows / Mac / iOS / Android' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth / USB', zh: '蓝牙 / USB' } },
      { param: { en: 'Display', zh: '显示' }, value: { en: 'Command-feedback display', zh: '指令反馈屏' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: '300mAh (602030), 3.7V', zh: '300mAh（602030），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'Type-C', zh: 'Type-C' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: '2.5h charge / 12h use', zh: '充电 2.5h / 使用 12h' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '212(L) x 36(W) x 17(H) mm', zh: '212(L) x 36(W) x 17(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '280g', zh: '280g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Pocket-Sized', zh: '便携小巧' },
        desc: { en: 'Compact and light — slips into any gig bag.', zh: '机身小巧轻便，轻松放入任何琴包。' }
      },
      {
        icon: 'app',
        color: 'cyan',
        title: { en: 'Smart APP Control', zh: '智能 APP 操控' },
        desc: { en: 'Set it up from the APP for simple, convenient operation.', zh: '通过 APP 设置，操作简单、使用便捷。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: '2.5h Charge / 12h Use', zh: '2.5h 充电 / 12h 续航' },
        desc: { en: 'A 2.5-hour charge delivers up to 12 hours of use.', zh: '充电 2.5 小时，使用长达 12 小时。' }
      },
      {
        icon: 'led',
        color: 'pink',
        title: { en: 'Command-Feedback Display', zh: '屏幕指令反馈' },
        desc: { en: 'The display reflects the commands you send, clear and intuitive.', zh: '屏幕直接反馈发出的指令，直观清晰。' }
      },
    ],
    highlights: [
      { label: { en: 'Footswitchs', zh: '踩钉' }, value: '4' },
      { label: { en: 'Battery', zh: '续航' }, value: '12h' },
      { label: { en: 'Charging', zh: '充电' }, value: 'USB-C' }
    ],
    gallery: ['images/productInfo/chocolate-1.webp', 'images/productInfo/chocolate-2.webp', 'images/productInfo/chocolate-3.webp', 'images/productInfo/chocolate-4.webp', 'images/productInfo/chocolate-5.webp'],
    related: ['chocolate-plus', 'cube-turner-pro'],
    officialUrl: 'https://www.m-vave.com/productinfo/724103.html'
  },

  'pedal-power': {
    name: 'PEDAL POWER',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Pedal-Power-Supplies/PEDAL-POWER.pdf',
    category: 'power',
    tagline: {
      en: '8-Output Isolated Pedalboard Power Supply',
      zh: '8 路独立隔离效果板供电器'
    },
    description: {
      en: 'An 8-output isolated pedalboard power supply. PEDAL POWER delivers eight independent 9V outputs — six at 100mA and two at 300mA — from a single Type-C 5V/2A input. Per-channel LEDs show status, and independent over-current protection on every channel means a fault on one output never affects the others. Compact at 139.6 x 26 x 20mm.',
      zh: '8 路隔离效果器电源。PEDAL POWER 通过单一 Type-C 5V/2A 输入，提供 8 路独立 9V 输出——其中 6 路 100mA、2 路 300mA。每路配 LED 状态指示，各通道独立过流保护，单路故障不影响其他通道。机身紧凑，仅 139.6 x 26 x 20mm。'
    },
    image: 'images/products/pedal-power.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Pedalboard power supply', zh: '效果器电源' } },
      { param: { en: 'Power Input', zh: '电源输入' }, value: { en: 'Type-C 5V 2A', zh: 'Type-C 5V 2A' } },
      { param: { en: 'Power Output', zh: '电源输出' }, value: { en: '6x DC 9V 100mA + 2x DC 9V 300mA', zh: '6 路 DC 9V 100mA + 2 路 DC 9V 300mA' } },
      { param: { en: 'Channels', zh: '通道' }, value: { en: '8 independent outputs', zh: '8 路独立输出' } },
      { param: { en: 'Protection', zh: '保护' }, value: { en: 'Independent over-current protection per channel', zh: '每路独立过流保护' } },
      { param: { en: 'Indicator', zh: '指示' }, value: { en: 'Per-channel LED status', zh: '每通道 LED 状态指示' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '139.6 x 26 x 20 mm', zh: '139.6 x 26 x 20 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '110.8g', zh: '110.8g' } },
      { param: { en: 'Accessories', zh: '配件' }, value: { en: 'Type-C cord + 8 DC cords', zh: 'Type-C 线 + 8 根 DC 线' } },
    ],
    features: [
      {
        icon: 'power',
        color: 'purple',
        title: { en: '8x 9V Outputs', zh: '8 路 9V 输出' },
        desc: { en: 'Eight independent 9V outputs: six 100mA and two 300mA.', zh: '8 路独立 9V 输出：6 路 100mA、2 路 300mA。' }
      },
      {
        icon: 'led',
        color: 'cyan',
        title: { en: 'Per-Channel LEDs', zh: '每路 LED' },
        desc: { en: 'Each LED shows its channel status and goes dark on over-current.', zh: '每路 LED 指示通道状态，过流时熄灭。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Independent Protection', zh: '独立保护' },
        desc: { en: 'Per-channel over-current protection isolates any fault.', zh: '每路独立过流保护，单路故障不影响其他通道。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Compact & Light', zh: '紧凑轻量' },
        desc: { en: 'Just 139.6 x 26 x 20mm and 110.8g, powered over Type-C.', zh: '仅 139.6 x 26 x 20mm、110.8g，Type-C 供电。' }
      },
    ],
    highlights: [
      { label: { en: 'Outputs', zh: '输出' }, value: '8' },
      { label: { en: 'Power', zh: '供电' }, value: 'USB-C' },
      { label: { en: 'Voltage', zh: '电压' }, value: '9V DC' }
    ],
    gallery: ['images/productInfo/pedal-power-1.webp', 'images/productInfo/pedal-power-2.webp', 'images/productInfo/pedal-power-3.webp', 'images/productInfo/pedal-power-4.webp', 'images/productInfo/pedal-power-5.webp'],
    related: ['mini-universe', 'classic-delay'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141707.html'
  },

  'isolated-power': {
    name: 'Isolated Power',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Pedal-Power-Supplies/Isolated-Power.pdf',
    category: 'power',
    tagline: { en: 'Noise-Free Isolated Power Supply', zh: '无噪音隔离供电器' },
    description: {
      en: 'A fully isolated pedalboard power supply with eleven outputs. Isolated Power provides ten ground-isolated 9V 300mA outputs plus one 5V 1A USB output from a DC 12V/2A input. Each channel has its own LED status indicator and independent over-current protection, so one faulty pedal never disturbs the rest. Measures 158 x 50 x 23mm.',
      zh: '全隔离效果器电源，11 路输出。Isolated Power 由 DC 12V/2A 输入，提供 10 路独立接地隔离的 9V 300mA 输出，外加 1 路 5V 1A USB 输出。每路独立 LED 状态指示与独立过流保护，单块故障不影响其他通道。机身 158 x 50 x 23mm。'
    },
    image: 'images/products/isolated-power.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Isolated pedalboard power supply', zh: '隔离效果器电源' } },
      { param: { en: 'Power Input', zh: '电源输入' }, value: { en: 'DC 12V 2A', zh: 'DC 12V 2A' } },
      { param: { en: 'Power Output', zh: '电源输出' }, value: { en: '10x DC 9V 300mA + 1x USB 5V 1A', zh: '10 路 DC 9V 300mA + 1 路 USB 5V 1A' } },
      { param: { en: 'Isolation', zh: '隔离' }, value: { en: 'Ground-isolated per channel', zh: '每路独立接地隔离' } },
      { param: { en: 'Protection', zh: '保护' }, value: { en: 'Independent over-current protection per channel', zh: '每路独立过流保护' } },
      { param: { en: 'Indicator', zh: '指示' }, value: { en: 'Per-channel LED status', zh: '每通道 LED 状态指示' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '158 x 50 x 23 mm', zh: '158 x 50 x 23 mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '228g', zh: '228g' } },
    ],
    features: [
      {
        icon: 'power',
        color: 'purple',
        title: { en: '11 Isolated Outputs', zh: '11 路隔离输出' },
        desc: { en: 'Ten ground-isolated 9V 300mA outputs plus a 5V 1A USB output.', zh: '10 路接地隔离 9V 300mA 输出，外加 1 路 5V 1A USB。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'True Ground Isolation', zh: '真接地隔离' },
        desc: { en: 'Each channel is ground-isolated to kill hum and noise.', zh: '每路接地隔离，消除底噪与交流声。' }
      },
      {
        icon: 'led',
        color: 'green',
        title: { en: 'Per-Channel Protection', zh: '每路保护' },
        desc: { en: 'LED status per channel with independent over-current protection.', zh: '每路 LED 状态指示，独立过流保护。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'Pedalboard-Ready', zh: '适配效果板' },
        desc: { en: 'Compact 158 x 50 x 23mm body fits under most pedalboards.', zh: '158 x 50 x 23mm 紧凑机身，适配大部分效果板。' }
      },
    ],
    gallery: ['images/productInfo/isolated-power-1.webp', 'images/productInfo/isolated-power-2.webp', 'images/productInfo/isolated-power-3.webp', 'images/productInfo/isolated-power-4.webp', 'images/productInfo/isolated-power-5.webp'],
    related: ['pedal-power', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141703.html'
  },

  // ============================
  // MINI-AMP (Pedal)
  // ============================
  'mini-amp': {
    name: 'MINI-AMP',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/MINI-AMP.pdf',
    category: 'pedal',
    tagline: {
      en: '9-Model Amp Simulator Pedal',
      zh: '9 种模型箱头模拟踏板'
    },
    description: {
      en: 'Nine legendary amplifiers in one compact pedal. The MINI-AMP delivers 9 meticulously crafted amp models based on famous guitar amplifiers, covering warm cleans, natural crunch, and bright high-gain tones. With a 3-band EQ and true bypass, it adapts to any genre and any rig — giving you a world of tone without a wall of amps.',
      zh: '一颗紧凑踏板中的九款传奇音箱。MINI-AMP 提供 9 种精心打造的箱头模型，基于著名吉他音箱，涵盖温暖清音、自然过载和明亮高增益音色。配备三段均衡器和真旁路，适应任何风格和任何设备——无需堆叠音箱即可获得丰富音色。'
    },
    image: 'images/products/mini-amp.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '112(L) x 68(W) x 40(H) mm', zh: '112(L) x 68(W) x 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '230g', zh: '230g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Premium Metal Design', zh: '简洁高档外观' },
        desc: { en: 'Clean, premium metal appearance design.', zh: '简洁、高档的金属外观设计。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: '9 Legendary Amps', zh: '9 款传奇音箱' },
        desc: { en: '9 voicings modeling 9 legendary amplifiers for most styles.', zh: '9 档音色，模拟 9 款传奇音箱，适用于大部分音乐风格。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Warm & Bright', zh: '温暖明亮' },
        desc: { en: 'Warm, natural and bright tone with great dynamic response.', zh: '音色温暖、自然、明亮，动态响应出色。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'Hardware Bypass + 3-Band EQ', zh: '硬件直通 + 三段 EQ' },
        desc: { en: 'True hardware bypass with a 3-band EQ.', zh: '具备硬件直通功能，配三段 EQ 调节。' }
      },
    ],
    highlights: [
      { label: { en: 'Models', zh: '模型' }, value: '9' },
      { label: { en: 'EQ', zh: '均衡' }, value: '3-Band' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/mini-amp-1.webp', 'images/productInfo/mini-amp-2.webp', 'images/productInfo/mini-amp-3.webp', 'images/productInfo/mini-amp-4.webp', 'images/productInfo/mini-amp-5.webp'],
    related: ['mini-efx', 'dist-mt1', 'dist-british'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106111.html'
  },

  // ============================
  // MINI-EFX (Pedal)
  // ============================
  'mini-efx': {
    name: 'MINI-EFX',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/MINI-EFX.pdf',
    category: 'pedal',
    tagline: {
      en: 'Multi-Effect Mini Pedal',
      zh: '多效果迷你踏板'
    },
    description: {
      en: '9 drive tones in a single compact pedal. MINI-EFX covers the full gain spectrum: 1 Boost, 4 Overdrive, and 4 Distortion tones, all adapted to a variety of music styles. Warm, natural, and bright timbres with excellent dynamic response, 3-band EQ, and true bypass.',
      zh: '一颗紧凑踏板中的 9 种驱动音色。MINI-EFX 覆盖完整增益范围：1 种 Boost、4 种 Overdrive 和 4 种 Distortion，适配多种音乐风格。温暖、自然、明亮的音色，出色的动态响应，三段均衡器，真旁路。'
    },
    image: 'images/products/mini-efx.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '112(L) x 68(W) x 40(H) mm', zh: '112(L) x 68(W) x 40(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '230g', zh: '230g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Premium Metal Design', zh: '简洁高档外观' },
        desc: { en: 'Clean, premium metal appearance design.', zh: '简洁、高档的金属外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: '9 Tones', zh: '9 档音色' },
        desc: { en: '9 voicings: 1 boost, 4 overdrive, 4 distortion.', zh: '共 9 档音色：1 档激励、4 档过载、4 档失真。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Warm & Bright', zh: '温暖明亮' },
        desc: { en: 'Warm, natural and bright tone with great dynamic response.', zh: '音色温暖、自然、明亮，动态响应出色。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'Hardware Bypass + 3-Band EQ', zh: '硬件直通 + 三段 EQ' },
        desc: { en: 'True hardware bypass with a 3-band EQ.', zh: '具备硬件直通功能，配三段 EQ 调节。' }
      },
    ],
    highlights: [
      { label: { en: 'Tones', zh: '音色' }, value: '9' },
      { label: { en: 'EQ', zh: '均衡' }, value: '3-Band' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/mini-efx-1.webp', 'images/productInfo/mini-efx-2.webp', 'images/productInfo/mini-efx-3.webp', 'images/productInfo/mini-efx-4.webp', 'images/productInfo/mini-efx-5.webp', 'images/productInfo/mini-efx-6.webp'],
    related: ['mini-amp', 'chorus', 'dig-delay'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106109.html'
  },

  // ============================
  // ABY-BOX (Pedal)
  // ============================
  'aby-box': {
    name: 'ABY-BOX',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/ABY-CHANNEL-SWITCH.pdf',
    category: 'pedal',
    tagline: {
      en: 'ABY Signal Switcher Pedal',
      zh: 'ABY 信号切换踏板'
    },
    description: {
      en: 'Route your signal, your way. The ABY-BOX lets you split one guitar signal to two amps, switch between two signal paths, or combine two inputs into one output. Built in a rugged metal enclosure with true bypass switching, it is the essential routing tool for any pedalboard.',
      zh: '随心路由你的信号。ABY-BOX 让你将一把吉他的信号分配到两个音箱、在两条信号路径间切换，或将两个输入合并为一个输出。坚固金属外壳配合真旁路开关，是任何效果板的必备路由工具。'
    },
    image: 'images/products/aby-box.webp',
    badge: null,
    specs: [
      { param: { en: 'A/B/C Jacks', zh: 'A/B/C 接口' }, value: { en: 'Standard 1/4" jack — MONO', zh: '标准 1/4" 单声道音频接口' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '42(H) x 48.5(W) x 90(L) mm', zh: '42(H) x 48.5(W) x 90(L) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '149g', zh: '149g' } },
    ],
    features: [
      {
        icon: 'controls',
        color: 'purple',
        title: { en: 'Versatile Line Selector', zh: '全能线路选择' },
        desc: { en: 'A full-featured line selector for instruments, amps, cabinets and pedalboards.', zh: '功能全面的线路选择单块，适用于乐器、音箱、箱体与效果器组合。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'A/B & A&B Modes', zh: 'A/B 与 A&B 模式' },
        desc: { en: 'Mode switch routes A and B separately, or A&B together.', zh: '模式选择开关，可使 A/B 分别传输或 A&B 同时传输。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'Bidirectional', zh: '正反双向' },
        desc: { en: 'Works both ways — signal from A/B to C, or from C to A/B.', zh: '支持正反双向使用，信号可从 A、B 到 C，也可从 C 到 A、B。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: 'All-Metal & No Power Needed', zh: '全金属免供电' },
        desc: { en: 'Compact all-metal shell with a mechanical true-bypass switch; works without power.', zh: '小巧精致的全金属外壳，机械直通脚踏开关，无需供电也可使用。' }
      },
    ],
    highlights: [
      { label: { en: 'Routing', zh: '路由' }, value: 'A/B/Y' },
      { label: { en: 'Power', zh: '供电' }, value: 'Passive' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/aby-box-1.webp', 'images/productInfo/aby-box-2.webp', 'images/productInfo/aby-box-3.webp', 'images/productInfo/aby-box-4.webp', 'images/productInfo/aby-box-5.webp'],
    related: ['mini-amp', 'noise-gate', 'booster'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106108.html'
  },

  // ============================
  // Looper PRO (Pedal)
  // ============================
  'looper-plus': {
    name: 'Looper PRO',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/LOOPER-PRO.pdf',
    category: 'pedal',
    tagline: {
      en: 'Enhanced Looper Pedal with Extended Recording',
      zh: '增强型循环录音踏板'
    },
    description: {
      en: 'Loop without limits. The Looper PRO extends your creative reach with longer recording time, unlimited overdubs, and intuitive one-button control. Layer guitar parts, build arrangements on the fly, and practice with yourself — all in a pedalboard-friendly mini format with true bypass.',
      zh: '无限循环创作。Looper PRO 以更长的录音时间、无限叠加和直观的单按钮控制扩展你的创意空间。叠加吉他声部、即兴编排、与自己练习——所有功能集于效果板友好的迷你格式，配备真旁路。'
    },
    image: 'images/products/looper-plus-nobg.webp',
    badge: null,
    specs: [
      { param: { en: 'Max Recording', zh: '最大录音时长' }, value: { en: '40 minutes', zh: '40 分钟' } },
      { param: { en: 'Single Loop', zh: '单档录音时长' }, value: { en: '10 minutes', zh: '10 分钟' } },
      { param: { en: 'Overdub', zh: '叠加次数' }, value: { en: 'Unlimited', zh: '无限' } },
      { param: { en: 'Loops', zh: '循环数量' }, value: { en: '9', zh: '9 个' } },
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '48K / 24bit', zh: '48K / 24bit' } },
      { param: { en: 'USB Type', zh: 'USB 接口' }, value: { en: 'Micro-B USB', zh: 'Micro-B USB' } },
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply', zh: '电源' }, value: { en: 'Standard 9V DC (negative inside, positive outside)', zh: '标准 9V 直流（内负外正）' } },
      { param: { en: 'Working Current', zh: '工作电流' }, value: { en: '100mA (DC 9V)', zh: '100mA（DC 9V）' } },
      { param: { en: 'Input Impedance', zh: '输入阻抗' }, value: { en: '1M ohm', zh: '1MΩ' } },
      { param: { en: 'Output Impedance', zh: '输出阻抗' }, value: { en: '100 ohm', zh: '100Ω' } },
      { param: { en: 'Net Weight', zh: '净重' }, value: { en: '300g', zh: '300g' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(D) x 40(W) x 49.5(H) mm', zh: '90(D) x 40(W) x 49.5(H) mm' } },
      { param: { en: 'Accessory', zh: '附件' }, value: { en: 'USB Cable x1', zh: 'USB 线 x1' } },
    ],
    features: [
      {
        icon: 'effects',
        color: 'purple',
        title: { en: '48K/24bit Lossless', zh: '48K/24bit 无损' },
        desc: { en: '48K/24bit sampling rate — lossless, uncompressed, professional tone quality.', zh: '48K/24bit 采样率，无损、无压缩，专业级音质。' }
      },
      {
        icon: 'loop',
        color: 'cyan',
        title: { en: '40 min · 9 Loops', zh: '40 分钟 · 9 循环' },
        desc: { en: '40 minutes total recording across 9 loops, each up to 10 minutes, with unlimited overdub.', zh: '总录音时长 40 分钟，9 个循环，单循环最长 10 分钟，支持无限叠加。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Built-in Tuner', zh: '内置调音器' },
        desc: { en: 'Built-in high-sensitivity tuning function.', zh: '内置高灵敏度调音功能。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'One-Footswitch Control', zh: '单脚踏控制' },
        desc: { en: 'One footswitch controls record, playback, overdub, undo, redo, stop and delete.', zh: '一个踩钉控制录音、播放、叠加、撤销、恢复、停止、删除。' }
      },
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Metal Shell + LED', zh: '金属外壳 + LED' },
        desc: { en: 'Full metal shell, compact yet weighty, with a colorful LED display.', zh: '全金属外壳，小巧而有质感，配彩色 LED 显示。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'PC WAV Import/Export', zh: '电脑导入导出' },
        desc: { en: 'Import/export WAV loops on Windows/Mac — no driver needed on Windows.', zh: '支持 Windows/Mac 导入/导出 WAV 乐句，Windows 无需安装驱动。' }
      },
    ],
    highlights: [
      { label: { en: 'Loop Time', zh: '循环时长' }, value: '10min' },
      { label: { en: 'Overdubs', zh: '叠加' }, value: '∞' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/looper-pro-1.webp', 'images/productInfo/looper-pro-2.webp', 'images/productInfo/looper-pro-3.webp', 'images/productInfo/looper-pro-4.webp', 'images/productInfo/looper-pro-5.webp'],
    related: ['looper', 'loop-ii', 'noise-gate'],
    officialUrl: 'https://www.m-vave.com/productinfo/168785.html'
  },

  // ============================
  // Tuner V1 (Pedal)
  // ============================
  'tuner-v1': {
    name: 'Precision Tuner',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/PRECISION-TUNER.pdf',
    category: 'pedal',
    tagline: {
      en: 'Precision Chromatic Tuner Pedal',
      zh: '精密半音阶调谐踏板'
    },
    description: {
      en: 'Tune with confidence under any spotlight. This chromatic tuner pedal features a bright, easy-to-read LED display visible in any lighting condition, with precision tuning accuracy of +/-1 cent. True bypass ensures your tone stays pristine when the tuner is off. A must-have foundation for every pedalboard.',
      zh: '在任何聚光灯下都能自信调音。这款半音阶调谐踏板配备明亮易读的 LED 显示屏，在任何光照条件下都清晰可见，调谐精度达 +/-1 音分。真旁路确保调谐器关闭时音色纯净。每个效果板的必备基础。'
    },
    image: 'images/products/tuner-v1.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Tuning Range', zh: '调音范围' }, value: { en: '12Hz – 4186Hz', zh: '12Hz–4186Hz' } },
      { param: { en: 'Tuning Precision', zh: '调音精度' }, value: { en: '±1 cent', zh: '±1 音分' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'High Precision & Fast', zh: '高精度快响应' },
        desc: { en: 'High precision with fast response speed.', zh: '高精度、响应迅速。' }
      },
      {
        icon: 'led',
        color: 'green',
        title: { en: 'Clear Note Display', zh: '清晰显示' },
        desc: { en: 'Clear screen shows pitch and note name quickly.', zh: '屏幕清晰，可快速读取音高与音名。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'True Bypass + Mute', zh: '真旁路 + 静音' },
        desc: { en: 'Real bypass; output is muted in tuning mode.', zh: '真旁路；调音模式下输出静音。' }
      },
    ],
    highlights: [
      { label: { en: 'Accuracy', zh: '精度' }, value: '±1¢' },
      { label: { en: 'Display', zh: '显示' }, value: 'LED' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/precision-tuner-1.webp', 'images/productInfo/precision-tuner-2.webp', 'images/productInfo/precision-tuner-3.webp', 'images/productInfo/precision-tuner-4.webp', 'images/productInfo/precision-tuner-5.webp', 'images/productInfo/precision-tuner-6.webp'],
    related: ['noise-gate', 'compressor', 'booster'],
    officialUrl: 'https://www.m-vave.com/productinfo/128578.html'
  },

  // ============================
  // NOISE GATE (Pedal)
  // ============================
  'noise-gate': {
    name: 'NOISE GATE',
    category: 'unavailable',
    tagline: {
      en: 'Precision Noise Gate Pedal',
      zh: '精密噪音门踏板'
    },
    description: {
      en: 'Silence the hiss, keep the tone. The NOISE GATE pedal eliminates unwanted noise, hum, and buzz from your signal chain without affecting your playing dynamics. Adjustable threshold and decay controls let you dial in the perfect gate setting for any rig — from high-gain metal tones to clean studio recordings.',
      zh: '消除噪音，保留音色。NOISE GATE 踏板从信号链中消除不必要的噪音、嗡嗡声和杂音，同时不影响演奏力度。可调节的阈值和衰减控制让你为任何设备找到完美的门限设置——从高增益金属音色到干净的录音室录制。'
    },
    image: 'images/products/noise-gate.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Effect Type', zh: '效果类型' }, value: { en: 'Noise Gate', zh: '噪音门' } },
      { param: { en: 'Controls', zh: '控制' }, value: { en: 'Threshold', zh: 'Threshold' } },
      { param: { en: 'Bypass', zh: '旁路' }, value: { en: 'True Bypass', zh: '真旁路' } },
      { param: { en: 'I/O', zh: '输入输出' }, value: { en: 'Input / Output 1/4" jacks', zh: '输入 / 输出 1/4" 接口' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: '9V DC (center negative)', zh: '9V DC（中心负极）' } },
      { param: { en: 'Housing', zh: '外壳' }, value: { en: 'Compact metal housing', zh: '紧凑金属外壳' } }
    ],
    features: [
      {
        icon: 'gate',
        color: 'purple',
        title: { en: 'Noise Elimination', zh: '噪音消除' },
        desc: { en: 'Cuts hiss, hum, and buzz while preserving your natural tone.', zh: '消除噪音、嗡嗡声和杂音，同时保留自然音色。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Adjustable Controls', zh: '可调控制' },
        desc: { en: 'Threshold and Decay knobs for precise gate tuning.', zh: '阈值和衰减旋钮实现精确的门限调节。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Signal integrity preserved when bypassed.', zh: '旁路时信号完整性得以保留。' }
      }
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Gate' },
      { label: { en: 'Controls', zh: '控制' }, value: '1-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/noise-gate-1.webp', 'images/productInfo/noise-gate-2.webp', 'images/productInfo/noise-gate-3.webp', 'images/productInfo/noise-gate-4.webp'],
    related: ['compressor', 'tuner-v1', 'booster'],
    officialUrl: 'https://www.m-vave.com/productinfo/128577.html'
  },

  // ============================
  // Booster (Pedal)
  // ============================
  'booster': {
    name: 'Booster',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/BOOSTER.pdf',
    category: 'unavailable',
    tagline: {
      en: 'Clean Boost Pedal',
      zh: '清音提升踏板'
    },
    description: {
      en: 'More volume, more presence, more you. The Booster pedal delivers clean, transparent gain boost to push your amp into natural overdrive or simply lift your signal for solos. With a simple one-knob design and true bypass, it is the ultimate set-and-forget tone enhancer for any pedalboard.',
      zh: '更多音量，更多存在感。Booster 踏板提供干净、透明的增益提升，推动你的音箱进入自然过载或简单地为独奏提升信号。简约的单旋钮设计配合真旁路，是任何效果板上的终极音色增强器。'
    },
    image: 'images/products/booster.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Effect Type', zh: '效果类型' }, value: { en: 'Clean Boost', zh: '清音提升' } },
      { param: { en: 'Controls', zh: '控制' }, value: { en: 'TREBLE,BASS,GAIN', zh: 'TREBLE、BASS、GAIN' } },
      { param: { en: 'Bypass', zh: '旁路' }, value: { en: 'True Bypass', zh: '真旁路' } },
      { param: { en: 'I/O', zh: '输入输出' }, value: { en: 'Input / Output 1/4" jacks', zh: '输入 / 输出 1/4" 接口' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: '9V DC (center negative)', zh: '9V DC（中心负极）' } },
      { param: { en: 'Housing', zh: '外壳' }, value: { en: 'Compact metal housing', zh: '紧凑金属外壳' } }
    ],
    features: [
      {
        icon: 'boost',
        color: 'purple',
        title: { en: 'Clean Boost', zh: '清音提升' },
        desc: { en: 'Transparent volume boost without coloring your tone.', zh: '透明的音量提升，不会染色你的音色。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Simple One-Knob', zh: '简约单旋钮' },
        desc: { en: 'One knob to dial in the perfect boost level.', zh: '一个旋钮即可调节完美的提升量。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'No signal loss when disengaged.', zh: '关闭时无信号损失。' }
      }
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Clean' },
      { label: { en: 'Design', zh: '设计' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/booster-1.webp', 'images/productInfo/booster-2.webp', 'images/productInfo/booster-3.webp', 'images/productInfo/booster-4.webp', 'images/productInfo/booster-5.webp'],
    related: ['compressor', 'overdrive-ts', 'noise-gate'],
    officialUrl: 'https://www.m-vave.com/productinfo/128576.html'
  },

  // ============================
  // Compressor (Pedal)
  // ============================
  'compressor': {
    name: 'Compressor',
    category: 'unavailable',
    tagline: {
      en: 'Dynamic Compressor Pedal',
      zh: '动态压缩踏板'
    },
    description: {
      en: 'Even out the dynamics, bring out the detail. The Compressor pedal tames volume spikes and boosts quiet passages, delivering smooth, sustained tone with studio-quality compression. Adjustable sustain and level controls let you go from subtle studio polish to heavy squeeze — essential for clean funk, country picking, or sustain-heavy leads.',
      zh: '均衡动态，呈现细节。Compressor 踏板抑制音量峰值并提升安静段落，以录音室品质的压缩效果提供平滑、持续的音色。可调节的延音和音量控制让你从细微的录音室修饰到重度压缩——清音放克、乡村拨弦或高延音主奏的必备。'
    },
    image: 'images/products/compressor.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Effect Type', zh: '效果类型' }, value: { en: 'Compressor', zh: '压缩器' } },
      { param: { en: 'Controls', zh: '控制' }, value: { en: 'Sustain, Level, Attack', zh: 'Sustain、Level、Attack' } },
      { param: { en: 'Bypass', zh: '旁路' }, value: { en: 'True Bypass', zh: '真旁路' } },
      { param: { en: 'I/O', zh: '输入输出' }, value: { en: 'Input / Output 1/4" jacks', zh: '输入 / 输出 1/4" 接口' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: '9V DC (center negative)', zh: '9V DC（中心负极）' } },
      { param: { en: 'Housing', zh: '外壳' }, value: { en: 'Compact metal housing', zh: '紧凑金属外壳' } }
    ],
    features: [
      {
        icon: 'compress',
        color: 'purple',
        title: { en: 'Studio Compression', zh: '录音室压缩' },
        desc: { en: 'Smooth, even dynamics for polished tone and sustain.', zh: '平滑均衡的动态，带来精致的音色和延音。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Sustain & Level', zh: '延音与音量' },
        desc: { en: 'Two essential controls for dialing in your compression sweet spot.', zh: '两个核心控制旋钮，精确找到压缩最佳点。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Unaltered tone when the pedal is off.', zh: '踏板关闭时音色不受影响。' }
      }
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Comp' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/compressor-1.webp', 'images/productInfo/compressor-2.webp', 'images/productInfo/compressor-3.webp', 'images/productInfo/compressor-4.webp', 'images/productInfo/compressor-5.webp'],
    related: ['booster', 'noise-gate', 'tuner-v1'],
    officialUrl: 'https://www.m-vave.com/productinfo/128574.html'
  },

  // ============================
  // DIST-MT1 (Pedal)
  // ============================
  'dist-mt1': {
    name: 'DIST-MT1',
    category: 'unavailable',
    tagline: {
      en: 'High-Gain Metal Distortion Pedal',
      zh: '高增益金属失真踏板'
    },
    description: {
      en: 'Unleash the fury. The DIST-MT1 delivers crushing high-gain distortion inspired by the legendary MT-2 circuit, with tight low end, searing mids, and sizzling highs. A parametric mid-frequency control lets you scoop or boost mids to shape everything from brutal death metal to aggressive thrash tones.',
      zh: '释放狂暴之力。DIST-MT1 提供毁灭性的高增益失真，灵感来自传奇 MT-2 电路，低频紧实、中频锐利、高频灼热。参量中频控制让你削减或提升中频，塑造从残酷死亡金属到侵略性鞭击音色的一切。'
    },
    image: 'images/products/dist-mt1.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Effect Type', zh: '效果类型' }, value: { en: 'High-Gain Distortion', zh: '高增益失真' } },
      { param: { en: 'Controls', zh: '控制' }, value: { en: 'Level, Tone, Gain', zh: 'Level、Tone、Gain' } },
      { param: { en: 'Bypass', zh: '旁路' }, value: { en: 'True Bypass', zh: '真旁路' } },
      { param: { en: 'I/O', zh: '输入输出' }, value: { en: 'Input / Output 1/4" jacks', zh: '输入 / 输出 1/4" 接口' } },
      { param: { en: 'Power', zh: '供电' }, value: { en: '9V DC (center negative)', zh: '9V DC（中心负极）' } },
      { param: { en: 'Housing', zh: '外壳' }, value: { en: 'Compact metal housing', zh: '紧凑金属外壳' } }
    ],
    features: [
      {
        icon: 'distortion',
        color: 'purple',
        title: { en: 'Crushing Gain', zh: '碾压增益' },
        desc: { en: 'Massive high-gain distortion for extreme metal and hard rock.', zh: '极致高增益失真，适合极端金属和硬摇滚。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Parametric Mid EQ', zh: '参量中频均衡' },
        desc: { en: 'Sweepable mid-frequency control for precise tone sculpting.', zh: '可扫频中频控制，精确塑造音色。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Clean signal when the distortion is off.', zh: '失真关闭时信号干净。' }
      }
    ],
    highlights: [
      { label: { en: 'Gain', zh: '增益' }, value: 'High' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/dist-mt1-1.webp', 'images/productInfo/dist-mt1-2.webp', 'images/productInfo/dist-mt1-3.webp', 'images/productInfo/dist-mt1-4.webp', 'images/productInfo/dist-mt1-5.webp'],
    related: ['dist-british', 'distortion-sc1', 'fuzz'],
    officialUrl: 'https://www.m-vave.com/productinfo/128564.html'
  },

  // ============================
  // Chorus (Pedal)
  // ============================
  'chorus': {
    name: 'Chorus',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/CHORUS.pdf',
    category: 'pedal',
    tagline: {
      en: 'Lush Analog-Style Chorus Pedal',
      zh: '丰润模拟风格合唱踏板'
    },
    description: {
      en: 'Add shimmer and dimension to every note. The Chorus pedal produces rich, swirling modulation that thickens your tone and adds spatial depth. From subtle ensemble warmth to deep, watery textures, adjustable Rate and Depth controls let you find your perfect chorus voice. True bypass keeps your dry tone intact.',
      zh: '为每个音符增添光泽和维度。Chorus 踏板产生丰富、旋转的调制效果，使音色更加饱满并增加空间深度。从细微的合奏温暖到深沉的水润质感，可调节的速率和深度控制让你找到完美的合唱之声。真旁路保持干信号完整。'
    },
    image: 'images/products/chorus.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'bypass',
        color: 'cyan',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'Pure Analog Circuit', zh: '纯模拟电路' },
        desc: { en: 'Pure-circuit analog product for a sweeter, warmer and more natural chorus.', zh: '纯电路模拟产品，合唱音色更甜美、温暖、自然。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Chorus' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/chorus-1.webp', 'images/productInfo/chorus-2.webp', 'images/productInfo/chorus-3.webp', 'images/productInfo/chorus-4.webp'],
    related: ['phaser', 'tremolo', 'dig-reverb'],
    officialUrl: 'https://www.m-vave.com/productinfo/128575.html'
  },

  // ============================
  // DIG Delay (Pedal)
  // ============================
  'dig-delay': {
    name: 'DIG Delay',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/DIGITAL-DELAY.pdf',
    category: 'pedal',
    tagline: {
      en: 'Digital Delay Pedal',
      zh: '数字延迟踏板'
    },
    description: {
      en: 'Crystal-clear repeats with digital precision. The DIG Delay pedal delivers pristine digital delay with adjustable time, feedback, and mix controls. From tight slapback echoes to long, rhythmic repeats, it adds depth and space to your playing without muddying your tone.',
      zh: '数字精度带来的清澈重复。DIG Delay 踏板提供纯净的数字延迟，配备可调节的时间、反馈和混合控制。从紧凑的拍打回声到悠长的节奏重复，为你的演奏增添深度和空间而不会混淆音色。'
    },
    image: 'images/products/dig-delay.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'Pure Digital', zh: '纯数字' },
        desc: { en: 'A pure-digital delay product.', zh: '纯数字延迟产品。' }
      },
      {
        icon: 'delay',
        color: 'green',
        title: { en: '9 Delay Types', zh: '9 种延迟' },
        desc: { en: 'Provides 9 types of delay.', zh: '提供 9 种延迟效果。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Digital' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/dig-delay-1.webp', 'images/productInfo/dig-delay-2.webp', 'images/productInfo/dig-delay-3.webp', 'images/productInfo/dig-delay-4.webp', 'images/productInfo/dig-delay-5.webp'],
    related: ['classic-delay', 'dig-reverb', 'dig-pitch'],
    officialUrl: 'https://www.m-vave.com/productinfo/128572.html'
  },

  // ============================
  // DIG Pitch (Pedal)
  // ============================
  'dig-pitch': {
    name: 'DIG Pitch',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/DIGITAL-PITCH.pdf',
    category: 'pedal',
    tagline: {
      en: 'Digital Pitch Shifter Pedal',
      zh: '数字移调踏板'
    },
    description: {
      en: 'Bend reality, shift your pitch. The DIG Pitch pedal offers precise digital pitch shifting for harmonizing, detuning, and octave effects. Create thick harmonies, subtle detune for chorus-like widening, or dramatic octave drops — all with accurate tracking and true bypass.',
      zh: '扭曲现实，转换音高。DIG Pitch 踏板提供精确的数字移调功能，用于和声、微调和八度效果。创造厚实的和声、细微的失谐以实现合唱般的展宽，或戏剧性的八度下降——所有功能都具备精确追踪和真旁路。'
    },
    image: 'images/products/dig-pitch.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'Pro Digital Algorithm', zh: '专业数字算法' },
        desc: { en: 'Built on our professional digital algorithm.', zh: '采用我司专业数字算法。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: '9 Pitch Types', zh: '9 种变调' },
        desc: { en: 'Provides 9 types of pitch adjustments.', zh: '提供 9 种变调效果。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'True Bypass + Wet/Dry', zh: '真旁路 + 干湿独立' },
        desc: { en: 'Real bypass; control wet or dry independently.', zh: '真旁路；可独立控制干声与湿声。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Pitch' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/dig-pitch-1.webp', 'images/productInfo/dig-pitch-2.webp', 'images/productInfo/dig-pitch-3.webp', 'images/productInfo/dig-pitch-4.webp', 'images/productInfo/dig-pitch-5.webp', 'images/productInfo/dig-pitch-6.webp'],
    related: ['dig-delay', 'dig-reverb', 'chorus'],
    officialUrl: 'https://www.m-vave.com/productinfo/128571.html'
  },

  // ============================
  // DIG Reverb (Pedal)
  // ============================
  'dig-reverb': {
    name: 'DIG Reverb',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/DIGITAL-REVERB.pdf',
    category: 'pedal',
    tagline: {
      en: 'Digital Reverb Pedal',
      zh: '数字混响踏板'
    },
    description: {
      en: 'Fill the room with your sound. The DIGITAL REVERB pedal is a pure-digital product delivering 9 types of reverb. From intimate room ambience to vast hall reverb, adjust Decay and Mix to place your tone in any acoustic space — all in a compact metal enclosure with true bypass.',
      zh: '用你的声音填满空间。DIGITAL REVERB 踏板是纯数字产品，提供 9 种混响类型。从亲密的房间氛围到广阔的大厅混响，调节 Decay 和 Mix 将你的音色置于任何声学空间——紧凑金属外壳，配备真旁路。'
    },
    image: 'images/products/dig-reverb.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'Pure Digital', zh: '纯数字' },
        desc: { en: 'A pure-digital reverb product.', zh: '纯数字混响产品。' }
      },
      {
        icon: 'reverb',
        color: 'green',
        title: { en: '9 Reverb Types', zh: '9 种混响' },
        desc: { en: 'Provides 9 types of reverb.', zh: '提供 9 种混响效果。' }
      },
      {
        icon: 'bypass',
        color: 'pink',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Digital' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/dig-reverb-1.webp', 'images/productInfo/dig-reverb-2.webp', 'images/productInfo/dig-reverb-3.webp', 'images/productInfo/dig-reverb-4.webp', 'images/productInfo/dig-reverb-5.webp', 'images/productInfo/dig-reverb-6.webp'],
    related: ['dig-delay', 'dig-pitch', 'chorus'],
    officialUrl: 'https://www.m-vave.com/productinfo/128570.html'
  },

  // ============================
  // DIST-British (Pedal)
  // ============================
  'dist-british': {
    name: 'DIST-British',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/DISTORTION-BRITISH.pdf',
    category: 'pedal',
    tagline: {
      en: 'British-Style Distortion Pedal',
      zh: '英式失真踏板'
    },
    description: {
      en: 'Channel the roar of a cranked British stack. The DIST-British captures the aggressive, harmonically rich distortion character of classic British amplifiers — think thick power chords, singing sustain, and that unmistakable midrange growl. Ideal for classic rock, punk, and hard rock tones.',
      zh: '传递英式音箱的咆哮。DIST-British 捕捉经典英式音箱的侵略性、谐波丰富的失真特质——厚实的强力和弦、歌唱般的延音和那标志性的中频咆哮。经典摇滚、朋克和硬摇滚音色的理想之选。'
    },
    image: 'images/products/dist-british.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: 'Marshall JCM Voicing', zh: '英式 JCM 音色' },
        desc: { en: 'Voiced toward the distortion of a Marshall JCM amp.', zh: '音色倾向于 Marshall JCM 音箱的失真。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'British Rock Distortion', zh: '英式摇滚失真' },
        desc: { en: 'Delivers a British rock distortion timbre.', zh: '带来英式摇滚的失真音色。' }
      },
    ],
    highlights: [
      { label: { en: 'Style', zh: '风格' }, value: 'British' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/dist-british-1.webp', 'images/productInfo/dist-british-2.webp', 'images/productInfo/dist-british-3.webp', 'images/productInfo/dist-british-4.webp'],
    related: ['dist-mt1', 'distortion-sc1', 'fuzz'],
    officialUrl: 'https://www.m-vave.com/productinfo/128568.html'
  },

  // ============================
  // Distortion-SC1 (Pedal)
  // ============================
  'distortion-sc1': {
    name: 'Distortion-SC1',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/DISTORTION-SC1.pdf',
    category: 'pedal',
    tagline: {
      en: 'Classic Distortion Pedal',
      zh: '经典失真踏板'
    },
    description: {
      en: 'Raw distortion with classic character. The Distortion-SC1 delivers tight, focused distortion with a vocal midrange and punchy low end, inspired by iconic distortion circuits. From crunchy rhythm tones to searing lead sounds, it covers the full spectrum of rock and metal distortion.',
      zh: '具有经典特质的原始失真。Distortion-SC1 提供紧凑、聚焦的失真，具有富有人声感的中频和有力的低频，灵感来自经典失真电路。从清脆的节奏音色到灼热的主奏音色，涵盖摇滚和金属失真的完整频谱。'
    },
    image: 'images/products/distortion-sc1.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'Wide Style Range', zh: '适配多种风格' },
        desc: { en: 'Adapts to a wide range of music styles.', zh: '可适配多种音乐风格。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Warm & Dynamic', zh: '温暖动态' },
        desc: { en: 'A warm distortion tone with great dynamic response.', zh: '温暖的失真音色，并具有出色的动态响应。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Distortion' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/distortion-sc1-1.webp', 'images/productInfo/distortion-sc1-2.webp', 'images/productInfo/distortion-sc1-3.webp', 'images/productInfo/distortion-sc1-4.webp'],
    related: ['dist-mt1', 'dist-british', 'fuzz'],
    officialUrl: 'https://www.m-vave.com/productinfo/128560.html'
  },

  // ============================
  // FUZZ (Pedal)
  // ============================
  'fuzz': {
    name: 'FUZZ',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/FUZZ.pdf',
    category: 'pedal',
    tagline: {
      en: 'Vintage Fuzz Pedal',
      zh: '复古法兹踏板'
    },
    description: {
      en: 'Thick, woolly, and wonderfully wild. The FUZZ pedal delivers the explosive, harmonically saturated fuzz tones that defined psychedelic rock and blues. From smooth, violin-like sustain to sputtering, gated fuzz textures, it covers the full range of vintage fuzz — from Hendrix to Sabbath and beyond.',
      zh: '厚实、蓬松、奇妙狂野。FUZZ 踏板提供爆发性的、谐波饱和的法兹音色，定义了迷幻摇滚和蓝调。从平滑的小提琴般延音到噗噗作响的门限法兹质感，涵盖复古法兹的完整范围——从 Hendrix 到 Sabbath 及更远。'
    },
    image: 'images/products/fuzz.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'Classic Retro Fuzz', zh: '经典复古音色' },
        desc: { en: 'Delivers a classical and retro fuzz timbre.', zh: '带来经典复古的 Fuzz 音色。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Aggressive Tone', zh: '更具攻击性' },
        desc: { en: 'For more distortion — a more aggressive, stronger and richer timbre.', zh: '需要更多失真时，让吉他音色更具攻击性、更强劲、更丰富。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Fuzz' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/fuzz-1.webp', 'images/productInfo/fuzz-2.webp'],
    related: ['dist-mt1', 'dist-british', 'overdrive-ts'],
    officialUrl: 'https://www.m-vave.com/productinfo/128557.html'
  },

  // ============================
  // Overdrive-BLUES (Pedal)
  // ============================
  'overdrive-blues': {
    name: 'Overdrive-BLUES',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/OVERDRIVE-BLUES.pdf',
    category: 'pedal',
    tagline: {
      en: 'Blues Overdrive Pedal',
      zh: '蓝调过载踏板'
    },
    description: {
      en: 'The soul of the blues at your feet. The Overdrive-BLUES pedal delivers warm, dynamic overdrive with the touch-sensitive response that blues players crave. Roll back your guitar volume for sparkling cleans, dig in for singing sustain — it responds to every nuance of your playing.',
      zh: '脚下的蓝调灵魂。Overdrive-BLUES 踏板提供温暖、动态的过载，具有蓝调演奏者渴望的触感响应。回拨吉他音量获得闪亮的清音，用力拨弦获得歌唱般的延音——它响应你演奏的每一个细微差别。'
    },
    image: 'images/products/overdrive-blues.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: '90s Blues Overdrive', zh: '90 年代蓝调过载' },
        desc: { en: 'Voiced toward a Marshall blues 90s overdrive timbre.', zh: '音色倾向于 Marshall 90 年代蓝调过载。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Fat & Sweet', zh: '饱满甜美' },
        desc: { en: 'A bit fat, a little wild and sweet, with great dynamic response.', zh: '音色饱满、略带狂野又不失甜美，动态响应出色。' }
      },
    ],
    highlights: [
      { label: { en: 'Style', zh: '风格' }, value: 'Blues' },
      { label: { en: 'Response', zh: '响应' }, value: 'Dynamic' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/overdrive-blues-1.webp', 'images/productInfo/overdrive-blues-2.webp', 'images/productInfo/overdrive-blues-3.webp', 'images/productInfo/overdrive-blues-4.webp'],
    related: ['overdrive-ts', 'overdrive-db', 'overdrive-amp'],
    officialUrl: 'https://www.m-vave.com/productinfo/128556.html'
  },

  // ============================
  // Overdrive-TS (Pedal)
  // ============================
  'overdrive-ts': {
    name: 'Overdrive-TS',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/OVERDRIVE-TS.pdf',
    category: 'pedal',
    tagline: {
      en: 'Tube Screamer-Style Overdrive Pedal',
      zh: '电子管尖叫风格过载踏板'
    },
    description: {
      en: 'The green machine reborn. The Overdrive-TS captures the iconic mid-hump overdrive character of the legendary Tube Screamer circuit. Smooth, creamy overdrive with a focused midrange that cuts through any mix — the go-to pedal for blues, rock, and as an amp-pushing boost.',
      zh: '绿色传奇重生。Overdrive-TS 捕捉了传奇 Tube Screamer 电路标志性的中频隆起过载特质。平滑、奶油般的过载，聚焦的中频穿透任何混音——蓝调、摇滚以及推动音箱的首选踏板。'
    },
    image: 'images/products/overdrive-ts.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: 'Ibanez TS808 Voicing', zh: 'TS808 音色' },
        desc: { en: 'Voiced toward the classic Ibanez TS808.', zh: '音色倾向于经典的 Ibanez TS808。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Sweet & Bright', zh: '甜美明亮' },
        desc: { en: 'Sweet and bright overdrive with great dynamic response.', zh: '甜美明亮的过载音色，动态响应出色。' }
      },
    ],
    highlights: [
      { label: { en: 'Style', zh: '风格' }, value: 'TS' },
      { label: { en: 'Character', zh: '特质' }, value: 'Mid-Hump' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/overdrive-ts-1.webp', 'images/productInfo/overdrive-ts-2.webp', 'images/productInfo/overdrive-ts-3.webp', 'images/productInfo/overdrive-ts-4.webp'],
    related: ['overdrive-blues', 'overdrive-db', 'overdrive-amp'],
    officialUrl: 'https://www.m-vave.com/productinfo/128554.html'
  },

  // ============================
  // Overdrive-DB (Pedal)
  // ============================
  'overdrive-db': {
    name: 'Overdrive-DB',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/OVERDRIVE-DB.pdf',
    category: 'pedal',
    tagline: {
      en: 'Dumble-Style Overdrive Pedal',
      zh: 'Dumble 风格过载踏板'
    },
    description: {
      en: 'Chase the legendary Dumble tone. The Overdrive-DB delivers the smooth, dynamic overdrive character of boutique Dumble-style amplifiers — rich harmonics, singing sustain, and an organic responsiveness that makes every note feel alive. The holy grail of overdrive for discerning players.',
      zh: '追寻传奇 Dumble 音色。Overdrive-DB 提供精品 Dumble 风格音箱的平滑、动态过载特质——丰富的谐波、歌唱般的延音和有机的响应性，让每一个音符都充满生命力。挑剔演奏者的过载圣杯。'
    },
    image: 'images/products/overdrive-db.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: 'DUMBLE Voicing', zh: 'DUMBLE 音色' },
        desc: { en: 'Voiced toward a DUMBLE overdrive.', zh: '音色倾向于 DUMBLE 过载。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Rich & Dynamic', zh: '细腻动态' },
        desc: { en: 'An indescribable overdrive timbre with great dynamic response.', zh: '难以言喻的过载音色，动态响应出色。' }
      },
    ],
    highlights: [
      { label: { en: 'Style', zh: '风格' }, value: 'Dumble' },
      { label: { en: 'Response', zh: '响应' }, value: 'Dynamic' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/overdrive-db-1.webp', 'images/productInfo/overdrive-db-2.webp', 'images/productInfo/overdrive-db-3.webp', 'images/productInfo/overdrive-db-4.webp', 'images/productInfo/classic-delay-5.webp'],
    related: ['overdrive-ts', 'overdrive-blues', 'overdrive-amp'],
    officialUrl: 'https://www.m-vave.com/productinfo/128553.html'
  },

  // ============================
  // Overdrive-AMP (Pedal)
  // ============================
  'overdrive-amp': {
    name: 'Overdrive-AMP',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/OVERDRIVE-AMP.pdf',
    category: 'pedal',
    tagline: {
      en: 'Amp-Style Overdrive Pedal',
      zh: '音箱风格过载踏板'
    },
    description: {
      en: 'The feel of a cranked amp in a pedal. The Overdrive-AMP replicates the natural, harmonically complex overdrive of a tube amplifier pushed to its sweet spot. Dynamic, responsive, and full of life — it gives you that amp-on-the-edge feel at any volume.',
      zh: '踏板中的全开音箱体验。Overdrive-AMP 复制了电子管音箱推至最佳点时自然、谐波复杂的过载。动态、响应灵敏、充满生命力——在任何音量下都能给你音箱临界点的感觉。'
    },
    image: 'images/products/overdrive-amp.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'amp',
        color: 'cyan',
        title: { en: 'Tube-Amp Voicing', zh: '电子管音箱音色' },
        desc: { en: 'Voiced toward a dynamic vacuum-tube amp.', zh: '音色倾向于富有动态的电子管音箱。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'effects',
        color: 'pink',
        title: { en: 'Natural & Dynamic', zh: '自然动态' },
        desc: { en: 'Natural timbre with great dynamic response.', zh: '自然的音色，并具有出色的动态响应。' }
      },
    ],
    highlights: [
      { label: { en: 'Style', zh: '风格' }, value: 'Amp' },
      { label: { en: 'Response', zh: '响应' }, value: 'Dynamic' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/overdrive-amp-1.webp', 'images/productInfo/overdrive-amp-2.webp', 'images/productInfo/overdrive-amp-3.webp'],
    related: ['overdrive-ts', 'overdrive-db', 'overdrive-blues'],
    officialUrl: 'https://www.m-vave.com/productinfo/128552.html'
  },

  // ============================
  // Phaser (Pedal)
  // ============================
  'phaser': {
    name: 'Phaser',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/PHASER.pdf',
    category: 'pedal',
    tagline: {
      en: 'Classic Phaser Effect Pedal',
      zh: '经典相位效果踏板'
    },
    description: {
      en: 'Swirl, sweep, and soar. The Phaser pedal creates the iconic phase-shifting effect that has defined countless classic recordings — from subtle, jet-like swooshes to deep, pulsing modulation. Adjustable Speed and Depth controls let you dial in everything from gentle movement to dramatic swirling textures.',
      zh: '旋转、扫频、翱翔。Phaser 踏板创造了定义无数经典录音的标志性相位偏移效果——从细微的喷气般呼啸到深沉的脉动调制。可调节的速度和深度控制让你从温柔的律动到戏剧性的旋转质感自由切换。'
    },
    image: 'images/products/phaser.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'bypass',
        color: 'cyan',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'Pure Analog Circuit', zh: '纯模拟电路' },
        desc: { en: 'Pure-circuit analog product for a sweeter, warmer and more natural sweep.', zh: '纯电路模拟产品，相位扫频更甜美、温暖、自然。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Phaser' },
      { label: { en: 'Controls', zh: '控制' }, value: '1-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/phaser-1.webp', 'images/productInfo/phaser-2.webp', 'images/productInfo/phaser-3.webp', 'images/productInfo/phaser-4.webp'],
    related: ['chorus', 'tremolo', 'dig-reverb'],
    officialUrl: 'https://www.m-vave.com/productinfo/128550.html'
  },

  // ============================
  // Tremolo (Pedal)
  // ============================
  'tremolo': {
    name: 'Tremolo',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/CLASSIC-TREMOLO.pdf',
    category: 'pedal',
    tagline: {
      en: 'Classic Tremolo Effect Pedal',
      zh: '经典颤音效果踏板'
    },
    description: {
      en: 'Pulse, throb, and breathe. The Tremolo pedal delivers the timeless volume-modulation effect that has graced everything from surf rock to indie and ambient music. Adjustable Speed and Depth controls let you create gentle pulsing, choppy stutter effects, or anything in between.',
      zh: '脉动、跳动、呼吸。Tremolo 踏板提供经典的音量调制效果，从冲浪摇滚到独立音乐和氛围音乐无处不在。可调节的速度和深度控制让你创造温柔的脉动、断续的颤音效果，或介于两者之间的任何效果。'
    },
    image: 'images/products/tremolo.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
      { param: { en: 'Weight', zh: '重量' }, value: { en: '221g', zh: '221g' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'Pure Analog Circuit', zh: '纯模拟电路' },
        desc: { en: 'A pure-circuit analog product for a sweet, warm and natural timbre.', zh: '纯电路模拟产品，音色甜美、温暖、自然。' }
      },
      {
        icon: 'bypass',
        color: 'green',
        title: { en: 'True Bypass', zh: '真旁路' },
        desc: { en: 'Real bypass keeps your signal clean when disengaged.', zh: '真旁路，关闭时信号纯净无染色。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Tremolo' },
      { label: { en: 'Controls', zh: '控制' }, value: '3-Knob' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/tremolo-1.webp', 'images/productInfo/tremolo-2.webp', 'images/productInfo/tremolo-3.webp', 'images/productInfo/tremolo-4.webp'],
    related: ['phaser', 'chorus', 'dig-reverb'],
    officialUrl: 'https://www.m-vave.com/productinfo/128548.html'
  },

  // ============================
  // LOOPER (Pedal)
  // ============================
  'looper': {
    name: 'LOOPER',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/MINI-PEDAL/MINI-LOOPER.pdf',
    category: 'pedal',
    tagline: {
      en: 'Compact Looper Pedal',
      zh: '紧凑型循环录音踏板'
    },
    description: {
      en: 'Record, layer, and perform. The LOOPER pedal provides straightforward loop recording with overdub capability in a compact, pedalboard-friendly format. One footswitch controls recording, playback, and overdub — making it the simplest way to practice, write songs, or perform as a one-person band.',
      zh: '录制、叠加、演出。LOOPER 踏板在紧凑的效果板友好格式中提供简单直接的循环录音和叠加功能。一个脚踏开关控制录音、回放和叠加——是练习、创作歌曲或独自演出的最简方式。'
    },
    image: 'images/products/looper.webp',
    badge: null,
    specs: [
      { param: { en: 'Input', zh: '输入' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: 'Standard 1/4" jack — MONO/TS', zh: '标准 1/4" 单声道接口（MONO/TS）' } },
      { param: { en: 'Max Recording', zh: '最大录音时长' }, value: { en: '5 minutes', zh: '5 分钟' } },
      { param: { en: 'Overdub', zh: '叠加次数' }, value: { en: 'Unlimited', zh: '无限' } },
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '48K / 24bit', zh: '48K / 24bit' } },
      { param: { en: 'Power Supply 1', zh: '电源供给 1' }, value: { en: 'DC 9V ≥300mA', zh: 'DC 9V≥300mA' } },
      { param: { en: 'Power Supply 2', zh: '电源供给 2' }, value: { en: 'USB 5V ≥300mA', zh: 'USB 5V≥300mA' } },
      { param: { en: 'USB Type', zh: 'USB 接口' }, value: { en: 'Micro USB', zh: 'Micro USB' } },
      { param: { en: 'Size', zh: '尺寸' }, value: { en: '90(L) x 40(W) x 34.5(H) mm', zh: '90(L) x 40(W) x 34.5(H) mm' } },
    ],
    features: [
      {
        icon: 'compact',
        color: 'purple',
        title: { en: 'Compact Metal Build', zh: '紧凑金属外观' },
        desc: { en: 'Compact metal appearance design.', zh: '紧凑的金属外观设计。' }
      },
      {
        icon: 'loop',
        color: 'cyan',
        title: { en: 'Unlimited Overdub', zh: '无限叠加' },
        desc: { en: 'Unlimited overdubbing for up to 5 minutes of recording.', zh: '可无限叠加录音，单次录音最长 5 分钟。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: 'Undo / Redo', zh: '撤销 / 恢复' },
        desc: { en: 'Undo and redo the last overdub unlimited times.', zh: '可无限次撤销或恢复最后一次叠加录音。' }
      },
      {
        icon: 'controls',
        color: 'pink',
        title: { en: 'One-Footswitch Control', zh: '单脚踏控制' },
        desc: { en: 'One footswitch controls record, play, stop, overdub, undo, redo and delete.', zh: '一个踩钉控制录音、播放、停止、叠加、撤销/恢复、删除等功能。' }
      },
      {
        icon: 'effects',
        color: 'purple',
        title: { en: 'Auto-Save + WAV', zh: '断电保存 + WAV' },
        desc: { en: 'Auto-stores recordings on sudden power-off; export/import WAV via USB.', zh: '突然断电会自动保存录音；可通过 USB 导出/导入 WAV 文件。' }
      },
    ],
    highlights: [
      { label: { en: 'Loop Time', zh: '循环时长' }, value: '5min' },
      { label: { en: 'Overdubs', zh: '叠加' }, value: '∞' },
      { label: { en: 'Bypass', zh: '旁路' }, value: 'True' }
    ],
    gallery: ['images/productInfo/looper-1.webp', 'images/productInfo/looper-2.webp', 'images/productInfo/looper-3.webp', 'images/productInfo/looper-4.webp', 'images/productInfo/looper-5.webp', 'images/productInfo/looper-6.webp'],
    related: ['looper-plus', 'loop-ii', 'noise-gate'],
    officialUrl: 'https://www.m-vave.com/productinfo/128547.html'
  },

  // ============================
  // WP-3 (Wireless)
  // ============================
  'wp-3': {
    name: 'WP-3',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS3.pdf',
    category: 'wireless',
    tagline: { en: 'Compact 5.8GHz Wireless Guitar System', zh: '紧凑型 5.8GHz 无线吉他系统' },
    description: {
      en: 'Clean 5.8GHz wireless for instruments. The WP-3 is a 5.8GHz wireless audio system with 24bit/48KHz lossless audio, low 5.6ms latency, and 30m range. A 190° rotating plug fits most electric instruments, with up to 4 sets running together, about 7.5h battery, and a one-to-two USB fast-charging cable.',
      zh: '为乐器打造的纯净 5.8GHz 无线。WP-3 是一款 5.8GHz 无线音频系统，24bit/48KHz 无损音质、延迟低至 5.6ms、传输距离 30 米。190° 可旋转插头适配大部分电声乐器，最多 4 组同时工作，续航约 7.5 小时，配一拖二 USB 快充线。'
    },
    image: 'images/productInfo/wp-3-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz lossless', zh: '24bit / 48KHz 无损' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '5.8GHz', zh: '5.8GHz' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<5.6ms', zh: '<5.6ms' } },
      { param: { en: 'Range', zh: '有效距离' }, value: { en: '30m outdoor / 15m through wall', zh: '户外 30 米 / 穿墙 15 米' } },
      { param: { en: 'THD', zh: '失真度' }, value: { en: '-98dB', zh: '-98dB' } },
      { param: { en: 'Dynamic Range', zh: '动态范围' }, value: { en: '>105dB', zh: '>105dB' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '190° rotating plug', zh: '190° 可旋转插头' } },
      { param: { en: 'Channel', zh: '声道' }, value: { en: 'Mono', zh: '单声道' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 4 sets simultaneously', zh: '最多 4 组同时使用' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'About 7.5 hours', zh: '约 7.5 小时' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'TX 780mAh / RX 450mAh (603040/602040), 3.7V', zh: 'TX 780mAh / RX 450mAh（603040/602040），3.7V' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'One-to-two USB cable (fast charge)', zh: '一拖二 USB 充电线（支持快充）' } },
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: '5.8GHz Wireless', zh: '5.8GHz 无线' },
        desc: { en: '5.8GHz band avoids 2.4GHz congestion for a clean signal.', zh: '5.8GHz 频段避开 2.4GHz 拥堵，信号纯净。' }
      },
      {
        icon: 'latency',
        color: 'cyan',
        title: { en: '5.6ms Latency', zh: '5.6ms 延迟' },
        desc: { en: 'Low 5.6ms latency keeps your playing tight.', zh: '延迟低至 5.6ms，演奏紧致。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: '190° Rotating Plug', zh: '190° 旋转插头' },
        desc: { en: 'Rotating plug fits most electric instruments.', zh: '可旋转插头适配大部分电声乐器。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'Fast Charge', zh: '快充' },
        desc: { en: 'One-to-two USB fast-charging cable, up to 4 sets together.', zh: '一拖二 USB 快充线，最多 4 组同时使用。' }
      },
    ],
    highlights: [
      { label: { en: 'Freq', zh: '频率' }, value: '5.8G' }
    ],
    gallery: ['images/productInfo/wp-3-1.webp', 'images/productInfo/wp-3-2.webp', 'images/productInfo/wp-3-3.webp', 'images/productInfo/wp-3-4.webp', 'images/productInfo/wp-3-5.webp'],
    related: ['wp-1', 'wp-9', 'sws11'],
    officialUrl: 'https://www.m-vave.com/productinfo/164691.html'
  },

  // ============================
  // WP-5 (Wireless)
  // ============================
  'wp-5': {
    name: 'WP-5',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Wireless/WS5.pdf',
    category: 'wireless',
    tagline: { en: '2.4GHz Wireless Guitar System', zh: '2.4GHz 无线吉他系统' },
    description: {
      en: 'Stereo wireless that turns to fit. The WP-5 is a 2.4GHz wireless audio transceiver with a 280° rotating head for drums, keyboards and most instruments. It carries 24bit/48KHz uncompressed stereo audio, latency under 12ms, and up to 30m range, supports up to 6 sets at once, and converts between 3.5mm and 6.35mm plugs.',
      zh: '可旋转适配的立体声无线。WP-5 是一款 2.4GHz 无线音频收发器，配备 280° 可旋转接头，适用于电鼓、键盘及大部分乐器。支持 24bit/48KHz 无压缩立体声音质、延迟低于 12ms、传输距离达 30 米，最多 6 组同时使用，并可在 3.5mm 与 6.35mm 插头间转换。'
    },
    image: 'images/productInfo/wp-5-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Sampling Rate', zh: '采样率' }, value: { en: '24bit / 48KHz uncompressed', zh: '24bit / 48KHz 无压缩' } },
      { param: { en: 'Band', zh: '无线频段' }, value: { en: '2.4GHz ISM', zh: '2.4GHz ISM' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<12ms', zh: '<12ms' } },
      { param: { en: 'Range', zh: '有效范围' }, value: { en: '≤30m outdoor / 15m through wall', zh: '户外 ≤30 米 / 穿墙 15 米' } },
      { param: { en: 'THD', zh: '失真度' }, value: { en: '-98dB', zh: '-98dB' } },
      { param: { en: 'Dynamic Range', zh: '动态范围' }, value: { en: '>105dB', zh: '>105dB' } },
      { param: { en: 'Frequency Response', zh: '频率响应' }, value: { en: '20Hz–20KHz, +1/-3dB', zh: '20Hz–20KHz，+1/-3dB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'TX 780mAh / RX 450mAh (603040/602040), 3.7V', zh: 'TX 780mAh / RX 450mAh（603040/602040），3.7V' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '280° rotating, 3.5mm/6.35mm convertible', zh: '280° 可旋转，3.5mm/6.35mm 互转' } },
      { param: { en: 'Channel', zh: '声道' }, value: { en: 'Stereo (mono & stereo supported)', zh: '立体声（支持单/双声道）' } },
      { param: { en: 'Multi-device', zh: '多设备' }, value: { en: 'Up to 6 sets simultaneously', zh: '最多 6 组同时使用' } },
      { param: { en: 'Battery Life', zh: '续航' }, value: { en: 'About 6.5 hours', zh: '约 6.5 小时' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB fast charging', zh: 'USB 快速充电' } },
    ],
    features: [
      {
        icon: 'audio',
        color: 'purple',
        title: { en: 'Stereo 24bit/48KHz', zh: '立体声 24bit/48KHz' },
        desc: { en: 'Uncompressed stereo audio, mono and stereo instruments supported.', zh: '无压缩立体声音质，单/双声道乐器均可。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: '280° Rotating Head', zh: '280° 旋转接头' },
        desc: { en: 'Rotating head fits drums, keyboards and most instruments.', zh: '可旋转接头适配电鼓、键盘及大部分乐器。' }
      },
      {
        icon: 'controls',
        color: 'green',
        title: { en: '3.5/6.35 Convertible', zh: '3.5/6.35 互转' },
        desc: { en: 'Plugs convert between 3.5mm and 6.35mm.', zh: '插头可在 3.5mm 与 6.35mm 间转换。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'Up to 6 Sets', zh: '最多 6 组' },
        desc: { en: 'Up to 6 sets together, about 6.5h battery, USB fast charge.', zh: '最多 6 组同时使用，续航约 6.5 小时，USB 快充。' }
      },
    ],
    highlights: [
      { label: { en: 'Freq', zh: '频率' }, value: '2.4G' }
    ],
    gallery: ['images/productInfo/wp-5-1.webp', 'images/productInfo/wp-5-2.webp', 'images/productInfo/wp-5-3.webp', 'images/productInfo/wp-5-4.webp', 'images/productInfo/wp-5-5.webp'],
    related: ['wp-3', 'wp-9', 'sws11'],
    officialUrl: 'https://www.m-vave.com/productinfo/498972.html'
  },

  // ============================
  // CUBE BABY AC (Multi-Effects)
  // ============================
  'cube-baby-ac': {
    name: 'CUBE BABY AC',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/CUBE-BABY-AC.pdf',
    category: 'multi',
    tagline: { en: 'Ultra-Compact Multi-Effects Processor for Acoustic Guitar', zh: '超紧凑声学吉他综合效果器' },
    description: {
      en: 'CUBE BABY AC is a portable multi-effects processor made for electro-acoustic guitar. It offers 3 factory presets (editable / overwritable), a 3-band EQ, compressor, feedback suppressor, modulation (chorus / tremolo), ambience (reverb / delay) and a 9-slot IR cabinet section with 8 classic IRs. Bluetooth music input, a rechargeable 6-hour battery and app/PC editing round it out.',
      zh: 'CUBE BABY AC 是一款专为电箱木吉他打造的便携综合效果器。提供 3 个出厂预设（可编辑覆盖）、三段 EQ、压缩、防啸叫，调制（合唱/颤音）、氛围（混响/延时）以及 9 档 IR 箱体模拟（含 8 种经典 IR）。支持蓝牙音乐输入、可充电电池续航约 6 小时，并可通过 APP/电脑软件编辑。'
    },
    image: 'images/productInfo/cube-baby-ac-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Electro-acoustic guitar multi-effects', zh: '电箱木吉他综合效果器' } },
      { param: { en: 'Presets', zh: '预设' }, value: { en: '3 (editable / overwritable)', zh: '3 个（可编辑、可覆盖）' } },
      { param: { en: 'EQ & Dynamics', zh: 'EQ 与动态' }, value: { en: '3-band EQ, Compressor, Feedback Suppressor', zh: '三段 EQ、压缩、防啸叫' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: 'Chorus / Tremolo, Reverb / Delay', zh: '合唱/颤音、混响/延时' } },
      { param: { en: 'IR Cabinets', zh: 'IR 箱体' }, value: { en: '9 slots (8 classic IRs, 1 off)', zh: '9 档（8 种经典 IR + 1 关闭）' } },
      { param: { en: 'Connectivity', zh: '连接' }, value: { en: 'Bluetooth music input', zh: '蓝牙音乐输入' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in, ~6h use', zh: '内置，续航约 6 小时' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB 5V/2A', zh: 'USB 5V/2A' } },
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: 'For Electro-Acoustic', zh: '为电箱琴而生' },
        desc: { en: 'Tuned for electro-acoustic guitar with IR cabinet sims.', zh: '专为电箱木吉他调校，含 IR 箱体模拟。' }
      },
      {
        icon: 'controls',
        color: 'cyan',
        title: { en: 'EQ + Feedback Suppressor', zh: 'EQ + 防啸叫' },
        desc: { en: '3-band EQ, compressor and a feedback suppressor.', zh: '三段 EQ、压缩与防啸叫功能。' }
      },
      {
        icon: 'effects',
        color: 'green',
        title: { en: 'Mod + Ambience', zh: '调制 + 氛围' },
        desc: { en: 'Chorus / tremolo plus reverb / delay effects.', zh: '合唱/颤音，加混响/延时效果。' }
      },
      {
        icon: 'battery',
        color: 'pink',
        title: { en: 'BT + ~6h Battery', zh: '蓝牙 + 6h 续航' },
        desc: { en: 'Bluetooth music input with about 6 hours of battery.', zh: '蓝牙音乐输入，续航约 6 小时。' }
      },
    ],
    highlights: [
      { label: { en: 'Target', zh: '适用' }, value: 'Acoustic' }
    ],
    gallery: ['images/productInfo/cube-baby-ac-1.webp', 'images/productInfo/cube-baby-ac-2.webp', 'images/productInfo/cube-baby-ac-3.webp', 'images/productInfo/cube-baby-ac-4.webp', 'images/productInfo/cube-baby-ac-5.webp'],
    related: ['cube-baby', 'cube-baby-bass', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/1141622.html'
  },

  // ============================
  // CUBE BABY BASS (Multi-Effects)
  // ============================
  'cube-baby-bass': {
    name: 'CUBE BABY BASS',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/CUBE-BABY-BASS.pdf',
    category: 'multi',
    tagline: { en: 'Ultra-Compact Multi-Effects Processor for Bass Guitar', zh: '超紧凑贝斯综合效果器' },
    description: { en: 'The CUBE BABY BASS delivers bass-optimized multi-effects in a tiny metal enclosure. Boost, 3-band EQ, Compressor, Phaser, Chorus, Delay, Reverb, and 8 Bass CAB IR slots. Supports Preset, Live, and Edit modes with mobile phone recording jack and USB audio.', zh: 'CUBE BABY BASS 在迷你金属外壳中提供贝斯专属综合效果器。增益、3 段 EQ、压缩、移相、合唱、延迟、混响和 8 个贝斯 CAB IR 插槽。支持预设、现场和编辑模式，配备手机录音接口和 USB 音频。' },
    image: 'images/productInfo/cube-baby-bass-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Target', zh: '适用' }, value: { en: 'Bass Guitar', zh: '贝斯' } },
      { param: { en: 'CAB IR Slots', zh: 'CAB IR 插槽' }, value: { en: '8 Bass CAB IR slots', zh: '8 个贝斯 CAB IR 插槽' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: 'Boost, EQ, Compressor, Phaser, Chorus, Delay, Reverb', zh: '增益、EQ、压缩、移相、合唱、延迟、混响' } },
      { param: { en: 'Modes', zh: '模式' }, value: { en: 'Preset / Live / Edit', zh: '预设 / 现场 / 编辑' } },
      { param: { en: 'I/O', zh: '接口' }, value: { en: 'Phone recording jack, USB audio', zh: '手机录音接口、USB 音频' } }
    ],
    features: [
      { icon: 'effects', color: 'purple', title: { en: 'Bass-Optimized Effects', zh: '贝斯专属效果' }, desc: { en: 'Boost, 3-band EQ, Compressor, Phaser, Chorus, Delay, and Reverb tuned for bass.', zh: '增益、3 段 EQ、压缩、移相、合唱、延迟和混响，专为贝斯调音。' } },
      { icon: 'ir', color: 'cyan', title: { en: '8 Bass CAB IR Slots', zh: '8 个贝斯 CAB IR 插槽' }, desc: { en: 'Load up to 8 custom bass cabinet IR files for authentic cab simulation.', zh: '最多加载 8 个自定义贝斯箱体 IR 文件，实现真实箱体模拟。' } },
      { icon: 'compact', color: 'green', title: { en: 'Pocket-Sized Metal Build', zh: '口袋大小金属机身' }, desc: { en: 'Ultra-compact enclosure with USB audio and phone recording output.', zh: '超紧凑外壳，配备 USB 音频和手机录音输出。' } }
    ],
    highlights: [
      { label: { en: 'IR Slots', zh: 'IR 插槽' }, value: '8' },
      { label: { en: 'Target', zh: '适用' }, value: 'Bass' }
    ],
    gallery: ['images/productInfo/cube-baby-bass-1.webp', 'images/productInfo/cube-baby-bass-2.webp', 'images/productInfo/cube-baby-bass-3.webp', 'images/productInfo/cube-baby-bass-4.webp', 'images/productInfo/cube-baby-bass-5.webp', 'images/productInfo/cube-baby-bass-6.webp'],
    related: ['cube-baby', 'cube-baby-ac', 'mini-universe'],
    officialUrl: 'https://www.m-vave.com/productinfo/1136336.html'
  },

  // ============================
  // TANK-B (Multi-Effects)
  // ============================
  'tank-b': {
    name: 'TANK-B',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/TANK-B-Z.pdf',
    category: 'multi',
    tagline: { en: 'All-In-One Multi-Effects Processor for Bass', zh: '一体式贝斯综合效果器' },
    description: { en: 'The TANK-B brings the full TANK multi-effects experience to bass players. Amp modeling, cabinet simulation, and a comprehensive effects library — all optimized for bass guitar — controlled via the companion APP. Built-in looper and direct recording output make it a complete bass rig in a single unit.', zh: 'TANK-B 将完整的 TANK 综合效果器体验带给贝斯手。音箱模拟、箱体模拟和全面的效果库——全部针对贝斯吉他优化——通过配套 APP 控制。内置循环器和直录输出，让它成为单体完整贝斯设备链。' },
    image: 'images/productInfo/tank-b-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Target', zh: '适用' }, value: { en: 'Bass Guitar', zh: '贝斯' } },
      { param: { en: 'Amp Models', zh: '音箱模型' }, value: { en: 'Bass amp simulations', zh: '贝斯音箱模拟' } },
      { param: { en: 'IR Loader', zh: 'IR 加载' }, value: { en: 'Built-in bass cabinet IR loader', zh: '内置贝斯箱体 IR 加载器' } },
      { param: { en: 'Looper', zh: '循环器' }, value: { en: 'Built-in looper', zh: '内置循环器' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'USB-C / WIRELESS APP', zh: 'USB-C / 蓝牙 APP' } }
    ],
    features: [
      { icon: 'amp', color: 'purple', title: { en: 'Bass Amp Modeling', zh: '贝斯音箱模拟' }, desc: { en: 'Classic bass amp models recreated with detail and authenticity.', zh: '经典贝斯音箱模型，细致真实地再现。' } },
      { icon: 'app', color: 'cyan', title: { en: 'APP Control', zh: 'APP 控制' }, desc: { en: 'Edit patches, download tones, and update firmware via your phone.', zh: '在手机上编辑音色、下载预设和更新固件。' } },
      { icon: 'loop', color: 'green', title: { en: 'Built-in Looper', zh: '内置循环器' }, desc: { en: 'Loop recording for practice and performance.', zh: '循环录音，适合练习和演出。' } }
    ],
    highlights: [
      { label: { en: 'Target', zh: '适用' }, value: 'Bass' },
      { label: { en: 'APP', zh: 'APP' }, value: '✓' }
    ],
    gallery: ['images/productInfo/tank-b-1.webp', 'images/productInfo/tank-b-2.webp', 'images/productInfo/tank-g-2.webp'],
    related: ['tank-g', 'cube-baby-bass', 'mk-300'],
    officialUrl: 'https://www.m-vave.com/productinfo/1106118.html'
  },

  // ============================
  // H8 (Multi-Effects)
  // ============================
  'h8': {
    name: 'H8',
    manualUrl: 'https://manualf.oss-cn-hongkong.aliyuncs.com/manual/Combined-Effect-Pedals/H8.pdf',
    category: 'multi',
    tagline: { en: 'Compact Multi-Effects Guitar Processor', zh: '紧凑型多效果吉他处理器' },
    description: {
      en: 'The H8 is a pocket-sized headphone-amp guitar multi-effects unit. Despite its tiny body it carries 10 factory presets (editable / overwritable), 10 classic amp-head models, modulation (chorus / phaser), a 1/4 echo delay, a hall reverb, 10 classic IR cabinets and a high-precision tuner. A built-in battery lasts 5 hours, and the 3.5mm headphone output keeps practice quiet and convenient.',
      zh: 'H8 是一款耳放式便携电吉他综合效果器。机身极小却内置 10 组出厂预设（可编辑覆盖）、10 种经典 AMP 箱头模拟、调制效果（CHORUS / PHASER）、一个 1/4 ECHO 延时、一个 HALL 混响、10 种经典 IR 箱体模拟，以及一个高精度校音器。内置电池续航 5 小时，3.5mm 耳机输出，练习既不扰民又便捷。'
    },
    image: 'images/productInfo/h8-1.webp',
    badge: null,
    specs: [
      { param: { en: 'Type', zh: '类型' }, value: { en: 'Pocket headphone-amp guitar multi-effects', zh: '耳放式便携吉他综合效果器' } },
      { param: { en: 'Presets', zh: '预设' }, value: { en: '10 (editable / overwritable)', zh: '10 组（可编辑、可覆盖）' } },
      { param: { en: 'Amp Models', zh: '音箱模拟' }, value: { en: '10 classic amp heads', zh: '10 种经典箱头' } },
      { param: { en: 'IR Cabinets', zh: 'IR 箱体' }, value: { en: '10 classic IR cabinets', zh: '10 种经典 IR 箱体' } },
      { param: { en: 'Effects', zh: '效果' }, value: { en: 'Chorus / Phaser, 1/4 echo delay, hall reverb', zh: '合唱/相位、1/4 ECHO 延时、HALL 混响' } },
      { param: { en: 'Tuner', zh: '调音器' }, value: { en: 'High-precision tuner', zh: '高精度校音器' } },
      { param: { en: 'Output', zh: '输出' }, value: { en: '3.5mm headphone', zh: '3.5mm 耳机输出' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Built-in, ~5h use', zh: '内置，续航约 5 小时' } },
      { param: { en: 'Charging', zh: '充电' }, value: { en: 'USB 5V/2A', zh: 'USB 5V/2A' } },
    ],
    features: [
      {
        icon: 'amp',
        color: 'purple',
        title: { en: '10 Presets, 10 Amps', zh: '10 预设 · 10 箱头' },
        desc: { en: '10 editable presets and 10 classic amp-head models.', zh: '10 组可编辑预设，10 种经典箱头模拟。' }
      },
      {
        icon: 'effects',
        color: 'cyan',
        title: { en: 'IR + Tuner', zh: 'IR + 调音器' },
        desc: { en: '10 classic IR cabinets and a high-precision tuner.', zh: '10 种经典 IR 箱体与高精度校音器。' }
      },
      {
        icon: 'effects',
        color: 'green',
        title: { en: 'Mod / Delay / Reverb', zh: '调制/延时/混响' },
        desc: { en: 'Chorus, phaser, a 1/4 echo delay and a hall reverb.', zh: '合唱、相位、1/4 ECHO 延时与 HALL 混响。' }
      },
      {
        icon: 'compact',
        color: 'pink',
        title: { en: '5h Battery, Headphone Out', zh: '5h 续航 · 耳机输出' },
        desc: { en: 'Pocket body, 5h battery and a 3.5mm headphone output.', zh: '口袋机身，续航 5 小时，3.5mm 耳机输出。' }
      },
    ],
    highlights: [
      { label: { en: 'Type', zh: '类型' }, value: 'Multi-FX' }
    ],
    gallery: ['images/productInfo/h8-1.webp', 'images/productInfo/h8-2.webp'],
    related: ['cube-baby', 'tank-g', 'pocket-amp'],
    officialUrl: 'https://www.m-vave.com/productinfo/604330.html'
  },

  // ============================
  // POWER SUPPLY (Discontinued)
  // ============================
  'power-supply': {
    name: 'POWER SUPPLY',
    category: 'unavailable',
    tagline: {
      en: 'Professional Pedal Board Power Supply',
      zh: '专业效果器电源板'
    },
    description: {
      en: 'The M-VAVE POWER SUPPLY is a professional pedal board power supply designed for gigging and studio musicians. Featuring 8+1 output ports with isolated outputs to eliminate ground loop noise, it provides clean, stable power to your entire pedalboard in a compact, portable form factor. This product has been discontinued.',
      zh: 'M-VAVE POWER SUPPLY 是一款专为演出和录音室音乐人设计的专业效果器电源板。配备 8+1 隔离输出接口，消除地回路噪音，为整个效果板提供干净、稳定的电源，外形紧凑便携。此产品已停产。'
    },
    image: 'images/products/power-supply-nobg.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Output Ports', zh: '输出接口' }, value: { en: '8+1 isolated outputs', zh: '8+1 隔离输出' } },
      { param: { en: 'Output Voltage', zh: '输出电压' }, value: { en: '9V DC (center negative)', zh: '9V DC（中心负极）' } },
      { param: { en: 'Output Current', zh: '输出电流' }, value: { en: '100mA per port', zh: '每路 100mA' } },
      { param: { en: 'Isolation', zh: '隔离' }, value: { en: 'Fully isolated outputs', zh: '全隔离输出' } },
      { param: { en: 'Input', zh: '输入' }, value: { en: 'AC 100-240V, 50/60Hz', zh: 'AC 100-240V，50/60Hz' } },
      { param: { en: 'Form Factor', zh: '外形' }, value: { en: 'Compact, pedalboard-friendly', zh: '紧凑，适合效果板安装' } }
    ],
    features: [
      {
        icon: 'power',
        color: 'purple',
        title: { en: '8+1 Isolated Outputs', zh: '8+1 隔离输出' },
        desc: { en: 'Nine independent isolated outputs eliminate ground loop noise and interference.', zh: '九路独立隔离输出，消除地回路噪音和干扰。' }
      },
      {
        icon: 'clean',
        color: 'cyan',
        title: { en: 'Clean Power', zh: '纯净电源' },
        desc: { en: 'Stable, regulated DC power keeps your pedals quiet and performing at their best.', zh: '稳定调节的直流电源，让你的踏板安静高效地工作。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Compact Design', zh: '紧凑设计' },
        desc: { en: 'Slim profile fits under most pedalboards, saving precious board space.', zh: '纤薄外形适合大多数效果板底部安装，节省宝贵空间。' }
      }
    ],
    highlights: [
      { label: { en: 'Outputs', zh: '输出' }, value: '8+1' },
      { label: { en: 'Isolation', zh: '隔离' }, value: 'Full' },
      { label: { en: 'Status', zh: '状态' }, value: 'EOL' }
    ],
    gallery: ['images/products/power-supply-nobg.webp'],
    related: ['pedal-power', 'isolated-power', 'aby-box'],
    officialUrl: 'https://www.m-vave.com'
  },

  // ============================
  // WP-2 Wireless Guitar System (Discontinued)
  // ============================
  'wp-2': {
    name: 'WP-2 Wireless Guitar System',
    category: 'unavailable',
    tagline: {
      en: '2.4GHz Wireless Guitar System',
      zh: '2.4GHz 无线吉他系统'
    },
    description: {
      en: 'The WP-2 was M-VAVE\'s flagship 2.4GHz wireless guitar system, delivering 24bit/48kHz audio quality with <2.5ms latency and a 30m outdoor transmission range. With a compact transmitter that plugs directly into the guitar jack and a belt-clip receiver, the WP-2 offered true cable-free freedom on stage. This product has been discontinued.',
      zh: 'WP-2 是 M-VAVE 的旗舰 2.4GHz 无线吉他系统，提供 24bit/48kHz 音频质量，<2.5ms 延迟，30m 户外传输距离。紧凑的发射器直接插入吉他接口，搭配腰夹接收器，WP-2 在舞台上提供真正的无线自由。此产品已停产。'
    },
    image: 'images/productInfo/wp-2.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Frequency', zh: '频率' }, value: { en: '2.4GHz ISM Band', zh: '2.4GHz ISM 频段' } },
      { param: { en: 'Audio Quality', zh: '音频质量' }, value: { en: '48kHz / 24-bit', zh: '48kHz / 24 位' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<2.5ms', zh: '<2.5ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m outdoor / 15m wall', zh: '30m 户外 / 15m 穿墙' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Rechargeable Li-ion', zh: '可充电锂电池' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '1/4" (6.35mm) jack', zh: '1/4"（6.35mm）插头' } },
      { param: { en: 'Channels', zh: '通道' }, value: { en: 'Multi-channel auto-sync', zh: '多通道自动同步' } }
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: '<2.5ms Ultra-Low Latency', zh: '<2.5ms 超低延迟' },
        desc: { en: '<2.5ms latency is virtually imperceptible — play with the feel of a cable.', zh: '<2.5ms 延迟几乎感觉不到 — 带来如有线般的演奏手感。' }
      },
      {
        icon: 'audio',
        color: 'cyan',
        title: { en: '48kHz Studio Quality', zh: '48kHz 录音室音质' },
        desc: { en: 'Crystal-clear 48kHz audio transmission preserves your tone faithfully.', zh: '48kHz 清晰音频传输，忠实还原你的音色。' }
      },
      {
        icon: 'range',
        color: 'green',
        title: { en: '30m Range', zh: '30m 传输距离' },
        desc: { en: 'Reliable 30m outdoor range (15m through walls) for stages and venues.', zh: '可靠的 30m 户外传输距离（15m 穿墙），适用于舞台和场馆。' }
      },
      {
        icon: 'plug',
        color: 'pink',
        title: { en: 'Plug-In Transmitter', zh: '直插式发射器' },
        desc: { en: 'Compact transmitter plugs directly into your guitar — no belt pack needed.', zh: '紧凑发射器直接插入吉他，无需腰包。' }
      }
    ],
    highlights: [
      { label: { en: 'Latency', zh: '延迟' }, value: '<2.5ms' },
      { label: { en: 'Range', zh: '距离' }, value: '30m' },
      { label: { en: 'Audio', zh: '音质' }, value: '24bit/48kHz' }
    ],
    gallery: ['images/productInfo/wp-2.webp'],
    related: ['wp-9', 'wp-7', 'sws11'],
    officialUrl: 'https://www.m-vave.com'
  },

  // ============================
  // WP-4 Wireless Guitar System (Discontinued)
  // ============================
  'wp-4': {
    name: 'WP-4 Wireless Guitar System',
    category: 'unavailable',
    tagline: {
      en: '2.4GHz Multi-Device Wireless Guitar System',
      zh: '2.4GHz 多设备无线吉他系统'
    },
    description: {
      en: 'The WP-4 expanded on M-VAVE\'s wireless lineup by supporting simultaneous multi-instrument connections, making it ideal for full-band setups. Operating on the stable 2.4GHz band, it delivered clean audio with low latency across multiple channels, allowing guitarists and bassists to share a single wireless system. This product has been discontinued.',
      zh: 'WP-4 扩展了 M-VAVE 无线产品线，支持多设备同时连接，非常适合全乐队配置。工作在稳定的 2.4GHz 频段，以多通道方式提供低延迟的清晰音频，让吉他手和贝斯手共用一套无线系统。此产品已停产。'
    },
    image: 'images/productInfo/wp-4.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Frequency', zh: '频率' }, value: { en: '2.4GHz ISM Band', zh: '2.4GHz ISM 频段' } },
      { param: { en: 'Sample Rate', zh: '采样率' }, value: { en: '24bit/48KHz stereo, lossless', zh: '24bit/48KHz 立体声，无损' } },
      { param: { en: 'Connections', zh: '连接数' }, value: { en: 'Multi-device support', zh: '支持多设备连接' } },
      { param: { en: 'Latency', zh: '延迟' }, value: { en: '<12ms', zh: '<12ms' } },
      { param: { en: 'Range', zh: '传输距离' }, value: { en: '30m outdoor / 15m wall', zh: '30m 户外 / 15m 穿墙' } },
      { param: { en: 'Dynamic Range', zh: '动态范围' }, value: { en: '>105dB', zh: '>105dB' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Rechargeable Li-ion', zh: '可充电锂电池' } },
      { param: { en: 'Connector', zh: '接头' }, value: { en: '1/4" (6.35mm) jack', zh: '1/4"（6.35mm）插头' } }
    ],
    features: [
      {
        icon: 'wireless',
        color: 'purple',
        title: { en: 'Multi-Device Support', zh: '多设备支持' },
        desc: { en: 'Connect multiple instruments simultaneously for whole-band wireless freedom.', zh: '同时连接多个乐器，整个乐队享受无线自由。' }
      },
      {
        icon: 'audio',
        color: 'cyan',
        title: { en: '2.4GHz Stability', zh: '2.4GHz 稳定性' },
        desc: { en: 'Reliable 2.4GHz band transmission with automatic channel selection.', zh: '可靠的 2.4GHz 频段传输，自动信道选择。' }
      },
      {
        icon: 'battery',
        color: 'green',
        title: { en: 'Rechargeable Battery', zh: '可充电电池' },
        desc: { en: 'Built-in rechargeable battery eliminates costly disposable cells.', zh: '内置可充电电池，告别昂贵的一次性电池。' }
      }
    ],
    highlights: [
      { label: { en: 'Freq', zh: '频段' }, value: '2.4G' },
      { label: { en: 'Range', zh: '距离' }, value: '30m' },
      { label: { en: 'Status', zh: '状态' }, value: 'EOL' }
    ],
    gallery: ['images/productInfo/wp-4.webp'],
    related: ['wp-9', 'wp-7', 'wp-1'],
    officialUrl: 'https://www.m-vave.com'
  },

  // ============================
  // Cube Magic (Discontinued)
  // ============================
  'cube-magic': {
    name: 'Cube Magic',
    category: 'unavailable',
    tagline: {
      en: 'Wireless MIDI Foot Controller',
      zh: '蓝牙 MIDI 脚踏控制器'
    },
    description: {
      en: 'The Cube Magic was a compact Wireless MIDI foot controller featuring 7 programmable Footswitchs, designed to control DAWs, amp simulators, and effects software wirelessly from the floor. Its low-profile design and reliable Wireless connection made it a popular choice for musicians seeking hands-free control. This product has been discontinued.',
      zh: 'Cube Magic 是一款紧凑的蓝牙 MIDI 脚踏控制器，配备 7 个可编程踩钉，专为无线控制 DAW、音箱模拟器和效果软件而设计。低矮的外形设计和可靠的蓝牙连接，使其成为寻求解放双手控制的音乐人的热门选择。此产品已停产。'
    },
    image: 'images/productInfo/cube-magic.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Footswitchs', zh: '踩钉数量' }, value: { en: '7 programmable Footswitchs', zh: '7 个可编程踩钉' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'Wireless MIDI', zh: '蓝牙 MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'iOS, Android, macOS, Windows', zh: 'iOS、Android、macOS、Windows' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Rechargeable Li-ion', zh: '可充电锂电池' } },
      { param: { en: 'Form Factor', zh: '外形' }, value: { en: 'Low-profile floor unit', zh: '低矮地板式外形' } },
      { param: { en: 'MIDI Output', zh: 'MIDI 输出' }, value: { en: 'Wireless MIDI / USB MIDI', zh: '蓝牙 MIDI / USB MIDI' } }
    ],
    features: [
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'Wireless MIDI', zh: '蓝牙 MIDI' },
        desc: { en: 'Wireless MIDI control over Wireless — no cables cluttering the stage.', zh: '通过蓝牙实现无线 MIDI 控制 — 舞台上无凌乱线缆。' }
      },
      {
        icon: 'pedal',
        color: 'cyan',
        title: { en: '4 Programmable Footswitchs', zh: '7 个可编程踩钉' },
        desc: { en: 'Assign any MIDI message to each switch for full custom control.', zh: '为每个踩钉分配任意 MIDI 消息，实现完全自定义控制。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Ultra-Compact', zh: '超紧凑' },
        desc: { en: 'Slim, lightweight design fits any pedalboard or bag with ease.', zh: '纤薄轻巧的设计，轻松放入任何效果板或包中。' }
      }
    ],
    highlights: [
      { label: { en: 'Footswitchs', zh: '踩钉' }, value: '7' },
      { label: { en: 'Connect', zh: '连接' }, value: 'BT' },
      { label: { en: 'Status', zh: '状态' }, value: 'EOL' }
    ],
    gallery: ['images/productInfo/cube-magic.webp'],
    related: ['cube-sugar', 'chocolate-plus', 'chocolate'],
    officialUrl: 'https://www.m-vave.com'
  },

  // ============================
  // Cube Sugar (Discontinued)
  // ============================
  'cube-sugar': {
    name: 'Cube Sugar',
    category: 'unavailable',
    tagline: {
      en: 'Compact Wireless MIDI Foot Controller',
      zh: '紧凑蓝牙 MIDI 脚踏控制器'
    },
    description: {
      en: 'The Cube Sugar was a compact Wireless MIDI foot controller tailored for sheet music apps and effects control. Its minimalist design with programmable foot switches allowed musicians to turn pages, trigger loops, and send MIDI commands — all without touching their hands. Perfect for solo performers, singer-songwriters, and live looping artists. This product has been discontinued.',
      zh: 'Cube Sugar 是一款专为乐谱应用和效果控制设计的紧凑蓝牙 MIDI 脚踏控制器。极简设计配合可编程脚踏开关，让音乐人无需动手即可翻谱、触发循环和发送 MIDI 命令。是独奏表演者、创作歌手和现场循环艺术家的完美选择。此产品已停产。'
    },
    image: 'images/productInfo/cube-sugar.webp',
    badge: { en: 'Discontinued', zh: '已停产' },
    specs: [
      { param: { en: 'Switches', zh: '踏板数量' }, value: { en: 'Programmable foot switches', zh: '可编程脚踏开关' } },
      { param: { en: 'Connectivity', zh: '连接方式' }, value: { en: 'Wireless MIDI', zh: '蓝牙 MIDI' } },
      { param: { en: 'Compatibility', zh: '兼容系统' }, value: { en: 'iOS, Android, macOS, Windows', zh: 'iOS、Android、macOS、Windows' } },
      { param: { en: 'Use Cases', zh: '使用场景' }, value: { en: 'Sheet music apps, effects control', zh: '乐谱应用、效果控制' } },
      { param: { en: 'Battery', zh: '电池' }, value: { en: 'Rechargeable Li-ion', zh: '可充电锂电池' } },
      { param: { en: 'Form Factor', zh: '外形' }, value: { en: 'Ultra-compact floor unit', zh: '超紧凑地板式外形' } }
    ],
    features: [
      {
        icon: 'WIRELESS',
        color: 'purple',
        title: { en: 'Wireless MIDI', zh: '蓝牙 MIDI' },
        desc: { en: 'Wireless MIDI over Wireless for cable-free performance control.', zh: '通过蓝牙实现无线 MIDI，无线缆演出控制。' }
      },
      {
        icon: 'score',
        color: 'cyan',
        title: { en: 'Sheet Music Control', zh: '乐谱控制' },
        desc: { en: 'Hands-free page turning for sheet music apps like forScore and MobileSheets.', zh: '为 forScore 和 MobileSheets 等乐谱应用提供免提翻页功能。' }
      },
      {
        icon: 'compact',
        color: 'green',
        title: { en: 'Pocket-Sized', zh: '口袋尺寸' },
        desc: { en: 'Incredibly compact — slips into any gig bag alongside your gear.', zh: '极致紧凑 — 可轻松放入任何演出包中。' }
      }
    ],
    highlights: [
      { label: { en: 'Connect', zh: '连接' }, value: 'BT' },
      { label: { en: 'Use', zh: '用途' }, value: 'MIDI' },
      { label: { en: 'Status', zh: '状态' }, value: 'EOL' }
    ],
    gallery: ['images/productInfo/cube-sugar.webp'],
    related: ['cube-magic', 'chocolate', 'chocolate-plus'],
    officialUrl: 'https://www.m-vave.com'
  }

};

// Helper: get all product IDs with full detail pages
const DETAILED_PRODUCT_IDS = [
  'smk25-ii', 'smk25', 'smk25-black', 'smk-37-pro', 'smk-37-elite', 'smc-pad', 'smc-mixer',
  'sws11', 'wp-9', 'tank-g', 'mk-300', 'mini-universe',
  'classic-delay', 'classic-delay-pd18', 'loop-ii', 'chocolate-plus', 'cube-turner-pro', 'pocket-amp',
  'mini-amp', 'mini-efx', 'aby-box', 'looper-plus', 'tuner-v1',
  'noise-gate', 'booster', 'compressor', 'dist-mt1', 'chorus',
  'dig-delay', 'dig-pitch', 'dig-reverb', 'dist-british', 'distortion-sc1',
  'fuzz', 'overdrive-blues', 'overdrive-ts', 'overdrive-db', 'overdrive-amp',
  'phaser', 'tremolo', 'looper',
  'power-supply', 'wp-2', 'wp-4', 'cube-magic', 'cube-sugar'
];

function hasDetailPage(id) {
  return DETAILED_PRODUCT_IDS.includes(id);
}
