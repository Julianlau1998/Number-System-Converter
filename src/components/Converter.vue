<template>
  <div class="wrapper">
      <form class="form">
          <input
            type="number"
            placeholder="Dec" 
            id="dec"
            v-model="dec"
            @keydown="base = 10"
            ref="dec"
            value=""
        />
          <input
            type="number"
            placeholder="Bin"
            v-model="bin"
            @keydown="base = 2"
            ref="bin"
            id=bin
        />
          <br>
          <input
            type="text"
            placeholder="Hex" 
            v-model="hex"
            @keydown="base = 16"
            ref="hex"
            id="hex"
        />
          <input
            type="number"
            placeholder="Oct"
            v-model="oct"
            @keydown="base = 8"
            ref="oct"
            id="oct"
        />
        <br>
        <select 
            name="baseSelect"
            id="baseSelect"
            class="select"
            ref="selectedBase"
        >
            <option 
                value="" 
                disabled selected
            >
                Base
            </option>
            <option
                v-for="(base, index) in bases"
                :key="index"
                :value="base"
            >
                {{base}}
            </option>
        </select>
        <input
            type="text"
            class="smallInput"
            placeholder="Value" 
            v-model="selected"
            ref="oct"
        />
      </form>
  </div>
</template>

<script>
export default {
    name: 'converter',
    data () {
        return {
            dec: null,
            bin: null,
            hex: null,
            oct: null,
            selected: null,
            base: null,
            selectedBase: 10,
            bases: [],
            notSelected: true
        }
    },
    created () {
        this.bases = [...Array(37).keys()]
        this.bases = this.bases.filter(el => el != 0 && el!= 1)
        console.log(this.bases)
    },
    watch: {
        dec(val) {
            if(this.base===10) {
                this.convert(val, 10)
            }
        },
        bin(val) {
            if(this.base===2) {
                this.convert(val, 2)
            }
        },
        hex(val) {
            if(this.base===16) {
                this.convert(val, 16)
            }
        },
        oct(val) {
            if(this.base===8) {
                this.convert(val, 8)
            }
        },
        selected(val) {
            if (
                this.base !== 2 &&
                this.base !== 8 &&
                this.base !== 10 &&
                this.base !== 16
            ) {
                this.notSelected = false
                this.selectedBase = this.$refs.selectedBase.value
                if(this.selectedBase!=='') {
                    this.convert(val, this.selectedBase)
                } 
                if (this.selectedBase === '') {
                    this.selectedBase = 10
                    this.convert(val, this.selectedBase)
                }
            }
        }
    },
    methods: {
            convert (val, base) {
                if (base === 10) {
                    if (val !== '') {
                        if (this.notSelected === true) {
                            this.selectedBase = this.$refs.selectedBase.value
                        }
                        val = parseInt(val)
                        this.bin = val.toString(2)
                        this.hex = val.toString(16)
                        this.oct = val.toString(8)
                        this.dec = val.toString(10)
                        this.selected = val.toString(parseInt(this.selectedBase))
                    } else {
                        this.bin = ''
                        this.hex = ''
                        this.oct = ''
                        this.selected = ''
                    }
                } else {
                    if (val !== '') {
                        this.dec = parseInt(val, base)
                        this.bin = this.dec.toString(2)
                        this.oct = this.dec.toString(8)
                        this.hex = this.dec.toString(16)
                        this.selected = this.dec.toString(this.selectedBase)
                    } else {
                        this.bin = ''
                        this.dec = ''
                        this.oct = ''
                        this.hex = ''
                        this.selected = ''
                    }
                }
            }
    }
}
</script>

<style scoped>
    .form {
        margin-top: 10rem;
    }
    input, 
    .select {
        height: 2.8rem;
        margin: 1rem;
        border-radius: 4rem;
        background: transparent;
        border: 2px solid #00D3D3;
        color: lightgray;
        outline: none;
        color: #ff0000;
    }
    .select {
        width: 5rem;
        padding-left: 0.5rem;
        padding-top: 0.2rem;
        font-size: 1.1rem;
    }
    .smallInput {
        width: 8rem;
        margin: 0.3rem;
    }
    input {
        width: 18rem;
        font-size: 1.5rem;
        padding: 0 1.2rem 0 1.2rem;
    }
    input:focus {
        border: 2px solid #EDCF32;
    }

    /*  Remove Arrows on inputs with type number */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    @media (max-width: 740px) {
        .form {
            margin-top: 7rem;
        }
    }
    @media (max-width: 371px) {
        input {
            width: 12rem;
        }
        .smallInput {
            width: 5rem;
        }
    }
</style>