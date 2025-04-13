<template>
    <ul class="app-list list-group">
        <li class="list-group-item d-flex justify-content-between">
            <span class="list-group-item-label">John Smith</span>
            <input type="text" class="list-group-item-input" value="1000$" />
            <div class="d-flex justify-content-center align-items-center">
                <button type="button" class="btn-cookie btn-sm">
                    <i class="fas fa-cookie"></i>
                </button>

                <button type="button" class="btn-trash btn-sm">
                    <i class="fas fa-trash"></i>
                </button>
                <i class="fas fa-star"></i>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span class="list-group-item-label">Alton Jhon</span>
            <input type="text" class="list-group-item-input" value="500$" />
            <div class="d-flex justify-content-center align-items-center">
                <button type="button" class="btn-cookie btn-sm">
                    <i class="fas fa-cookie"></i>
                </button>

                <button type="button" class="btn-trash btn-sm">
                    <i class="fas fa-trash"></i>
                </button>
                <i class="fas fa-star"></i>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span class="list-group-item-label">Tisha Katava</span>
            <input type="text" class="list-group-item-input" value="700$" />
            <div class="d-flex justify-content-center align-items-center">
                <button type="button" class="btn-cookie btn-sm">
                    <i class="fas fa-cookie"></i>
                </button>

                <button type="button" class="btn-trash btn-sm">
                    <i class="fas fa-trash"></i>
                </button>
                <i class="fas fa-star"></i>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-list {
    margin-top: 30px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    color: #fff;
}

.list-group-item {
    padding: 15px 20px;
    border-bottom: 1px solid #3d5a80;
}

.list-group-item:last-child {
    border-bottom: none;
}

.list-group-item span {
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    min-width: 550px;
}

.list-group-item input {
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
}

.list-group-item button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.list-group-item .btn-cookie {
    color: #e09f3e;
}

.list-group-item .btn-trash {
    color: #e5383b;
}

.list-group-item .fa-star {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #ffd700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
}

.list-group-item.like .fa-star {
    opacity: 1;
    transform: translateX(0px);
}

.list-group-item.increase .list-group-item-label,
.list-group-item.increase .list-group-item-input {
    color: #e09f3e;
}

.list-group-item.increase .btn-star {
    color: #aeaeae;
}
</style>
